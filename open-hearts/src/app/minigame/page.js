"use client";

import Header from "../../components/header.js";
import Game from "../../components/game.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/system';
import next from "next";

export default function Minigame() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [data, setData] = useState(null);
    const [strList, setStrList] = useState([]);
    const [currProfile, setProfile] = useState(null);
    const [dialogue, setDialogue] = useState(null);
    const [index, setindex] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState(0);
    const [responses, setResponses] = useState([]);
    const [endingText, setEnding] = useState("");
    let count = 0;

    const handleRestart = () => {
        setProfile(null);
        setDialogue(null);
        setindex(0);
        setOptions([]);
        setOption(0);
        setResponses([]);
        setEnding("");
        generateRandomProfile();
    };

    useEffect(() => {
        if (gameStarted && currProfile === null) {
            generateRandomProfile();
        }
    }, [gameStarted]);

    const getRandomProfile = async () => {
        // Get a random profile
        const res = await fetch("http://localhost:8080/api/profile");
        const profile = await res.json(); // contains full profile (id, name, dialogue map, etc)
        //console.log("Profile: " + JSON.stringify(profile));
        return profile;
    }

    const getDialogue = async (profile) => {
        const response = await fetch(`http://localhost:8080/api/dialogue?profileId=${profile.profileId}&option=${"option" + option}`);
        //console.log("Profile ID: " + profile.profileId + " Option: " + randomOption);
        const nextDialogue = await response.json();
        return nextDialogue;
    }

    const generateRandomProfile = async () => {
        const profile = await getRandomProfile();
        const nextDialogue = await getDialogue(profile);
        setDialogue(nextDialogue);
        setProfile(profile);
        console.log("Generated Profile: " + JSON.stringify(profile));
        console.log("Dialogue:", nextDialogue);
        generateOptions(profile);
        getUserResponses(profile);
        getEndingText(profile);
    }

    const getEndingText = async (profile) => {
        const response = await fetch(`http://localhost:8080/api/ending?profileId=${profile.profileId}`);
        const ending = await response.text();
        console.log("Ending text: " + ending);
        setEnding(ending);
    }

    const testDataMapping = async () => {
        if (dialogue && index < dialogue.length) {
            setStrList(prevItems => [...prevItems, dialogue[index]]);
            setindex(index + 1);
        }
    }

    const clearMapping = () => {
        setStrList([]);
        setindex(0);
    }

    const generateOptions = async (profile) => {
        const response = await fetch(`http://localhost:8080/api/userOptions?profileId=${profile.profileId}`);
        const optionsData = await response.json();
        console.log("Options Data: " + JSON.stringify(optionsData));
        setOptions(optionsData);
    }

    const getUserResponses = async (profile) => {
        const response = await fetch(`http://localhost:8080/api/userResponses?profileId=${profile.profileId}`);
        const userResponses = await response.json();
        console.log("User Responses: " + JSON.stringify(userResponses));
        setResponses(userResponses);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <Header />

            {
                isMobile ?
                    <div className="h-full w-full flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 gap-6 my-13">
                        {
                            gameStarted &&
                            <div className="h-full w-full flex justify-center items-center w-full">
                                <Game gameStarted={gameStarted} 
                                    currProfile={currProfile ? currProfile : ""} 
                                    responses={responses ? responses : []} 
                                    options={options ? options : []} 
                                    endingText={endingText ? endingText: ""}
                                    onRestart={handleRestart}
                                />
                            </div>
                        }
                        {
                            !gameStarted &&
                            <div className="h-full flex justify-start flex-col gap-6 w-full">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h4.fontSize,
                                            sm: theme.typography.h4.fontSize,
                                            md: theme.typography.h4.fontSize,
                                            lg: theme.typography.h3.fontSize,
                                            xl: theme.typography.h3.fontSize,
                                        },
                                        color: "black",
                                        fontWeight: "bold",
                                        textAlign: "center"
                                    }}
                                >
                                    Title of Game
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: "black",
                                    }}
                                >
                                    Game description blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah blah
                                </Typography>
                                <div
                                    className="w-full h-18 bg-[#A33E70] rounded-full cursor-pointer flex justify-center items-center text-center"
                                    onClick={() => setGameStarted(true)}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: theme.typography.h5.fontSize,
                                                sm: theme.typography.h5.fontSize,
                                                md: theme.typography.h5.fontSize,
                                                lg: theme.typography.h4.fontSize,
                                                xl: theme.typography.h4.fontSize,
                                            },
                                            color: "white",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        PLAY
                                    </Typography>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <div className="h-full w-full flex flex-row justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 gap-16 my-13 md:my-18">
                        <div className={`h-full flex justify-center items-center ${gameStarted ? 'w-full' : 'w-1/2'}`}>
                            <Game Game gameStarted={gameStarted} 
                                  currProfile={currProfile ? currProfile : ""} 
                                  responses={responses ? responses : []}
                                  options={options ? options : []} 
                                  endingText={endingText ? endingText: ""}
                                  onRestart={handleRestart}
                                  />
                        </div>
                        {
                            !gameStarted &&
                            <div className="h-full flex justify-start flex-col gap-6 w-1/2">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h4.fontSize,
                                            sm: theme.typography.h4.fontSize,
                                            md: theme.typography.h4.fontSize,
                                            lg: theme.typography.h3.fontSize,
                                            xl: theme.typography.h3.fontSize,
                                        },
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Title of Game
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: "black",
                                    }}
                                >
                                    Game description blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah blah
                                    blah blah blah blah blah blah blah blah blah blah
                                </Typography>
                                <div
                                    className="w-full h-18 bg-[#A33E70] rounded-full cursor-pointer flex justify-center items-center text-center"
                                    onClick={() => { setGameStarted(true) }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: theme.typography.h5.fontSize,
                                                sm: theme.typography.h5.fontSize,
                                                md: theme.typography.h5.fontSize,
                                                lg: theme.typography.h4.fontSize,
                                                xl: theme.typography.h4.fontSize,
                                            },
                                            color: "white",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        PLAY
                                    </Typography>
                                </div>
                            </div>
                        }
                    </div>
            }



            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
            >
                <Link href="/red-flags" passHref >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h6.fontSize,
                                sm: theme.typography.h6.fontSize,
                                md: theme.typography.h6.fontSize,
                                lg: theme.typography.h5.fontSize,
                                xl: theme.typography.h5.fontSize,
                            },
                            color: "black",
                        }}
                    >
                        ← Back
                    </Typography>
                </Link>
                <Link href="/resources" passHref >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h6.fontSize,
                                sm: theme.typography.h6.fontSize,
                                md: theme.typography.h6.fontSize,
                                lg: theme.typography.h5.fontSize,
                                xl: theme.typography.h5.fontSize,
                            },
                            color: "black",
                        }}
                    >
                        Next →
                    </Typography>
                </Link>
            </motion.div>

            {/* <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2rem', marginRight: '5rem', gap: '1rem'}}>
                    <button style={{cursor: 'pointer'}} onClick={generateRandomProfile}>Generate Profile!</button>
                    <br></br>
                    <button style={{cursor: 'pointer'}} onClick={clearMapping}>Clear Mapping!</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{cursor: 'pointer'}} onClick={testDataMapping}>Test Data Map!</button>
                    <div>
                        {strList.map((text, idx) => (
                            <Typography key={idx}>{text}</Typography>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}