"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import blankProfilePic from "../components/images/blank-pfp.png";
import gameStartCurve from "../components/images/GameStartCurve1.svg"
import { Key } from "@mui/icons-material";

export default function Game({ gameStarted, currProfile, responses, options }) {
    const theme = useTheme()
    const [page, setPage] = useState(0);
    const [messageArr, setMessageArr] = useState(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
    const [currResponses, setCurrResponses] = useState(["f"]);
    const [responseInd, setResInd] = useState(0);
    const [dialogueInd, setDialInd] = useState(0);
    const [scammerFound, setFound] = useState(false);
    const messageDivRef = useRef(null);

    let count = 0;
    let messageInd = 0;
    let optionCount = 1;
    let index = -1;
    const dialogueArr = [];

    useEffect(() => {
        setCurrResponses([...options]);
    }, [options.length]);

    useEffect(() => {
        if (messageDivRef.current) {
            messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight;
        }
    }, [messageArr.length])

    const getDialogueArr = async () => {
        if (!currProfile || !currProfile.profileId) return; // Prevent fetch if not ready
        const response = await fetch(`http://localhost:8080/api/dialogue?profileId=${currProfile.profileId}&option=${"option" + index}`);
        if (!response.ok) {
            // Optionally handle error
            return;
        }
        const text = await response.text();
        if (!text) return; // Prevent parsing empty response
        const arr = JSON.parse(text); //gets dialogue arr
        dialogueArr.push(...arr);
        setMessageArr(messageArr => [...messageArr, dialogueArr[dialogueInd]]);
        setDialInd(dialogueInd + 1);
    }

    const clearMapping = () => {
        setMessageArr(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
        setResInd(0);
        setCurrResponses([...options]);
        setDialInd(0);
    }

    // const handleClick = (text) => {
    //     setMessageArr(messageArr => [...messageArr, text]);
    //     currResponses.length = 0;
    //     optionCount = 1;
    //     if (responses.length !== 0 && responseInd < responses.length){ //prevents start error or OOB
    //         for (let i = 0; i < responses[responseInd].length; i++) {
    //             currResponses.push(responses[responseInd][i].response1);
    //             currResponses.push(responses[responseInd][i].response2);
    //         }

    //         setCurrResponses([ ... currResponses]);
    //         responseInd++;
    //     } else if (responseInd >= responses.length) {
    //         setPage(3);
    //     }
    // }
    // if (responses.length !== 0){ //prevents start error
    //     for (let i = 0; i < responses[responseInd].length; i++) {
    //         currResponses.push(responses[responseInd][i].response1);
    //         currResponses.push(responses[responseInd][i].response2);
    //     }
    // }
    // responses[responseInd].map((response) => (
    //     currResponses.push(response)
    // ))

    // currResponses.map((response) => (
    //     console.log(response)
    // ))


    // if (currProfile && currProfile.isScammer) {
    //     introMessage = "Hey there! I saw your profile and thought that we’d be a perfect match!";
    // } else if (currProfile) {
    //     introMessage = "Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!";
    // }

    // useEffect(() => {
    //     console.log("Current Profile:", currProfile);
    //     console.log("Dialogue:", dialogue);
    //     setMessageArr(dialogue);
    //     console.log("Set message array:", dialogue);
    // }, [currProfile, dialogue])

    // Page 0: Match page
    if (page === 0) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl overflow-hidden">
                <div className="relative h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden">
                    {
                        gameStarted ?
                            <>
                                <Typography style={{ fontSize: "18px" }}>{"You've matched with"}<br />
                                    <strong>{currProfile ? currProfile.name : "Loading..."}{"!"}</strong>
                                </Typography>
                                <Image
                                    src={blankProfilePic}
                                    alt="Blank Profile Picture"
                                    width={200}
                                    height={200}
                                    className="object-contain w-20 sm:w-20 md:w-20 lg:w-24 xl:w-28 rounded-full mt-5 flex justify-center items-center"
                                />
                                <Typography
                                    sx={{ color: "black", cursor: "pointer", textDecoration: "underline", mt: 2, fontSize: "12px" }}
                                    onClick={() => setPage(1)}
                                >
                                    See Profile
                                </Typography>
                                <Image
                                    src={gameStartCurve}
                                    alt="Game Start Curve"
                                    fill={false}
                                    className="absolute left-0 w-full"
                                    style={{ pointerEvents: "none", bottom: "-1.2rem", width: "100%" }}
                                />
                            </>
                            : <Typography>WEEEEEEEEEEEEEE GAME PLACEHOLDER</Typography>
                    }
                </div>
            </div>
        )
    }
    // Page 1: Profile page
    if (page === 1) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl">
                <div className="h-[37rem] bg-gray-400 border-black border-8 rounded-3xl flex justify-center items-center text-center">
                    <section className="relative w-full h-[32.5em] mt-14 rounded-2xl bg-white flex flex-col px-2 overflow-auto">
                        <Image
                            src={blankProfilePic}
                            alt="Blank Profile Picture"
                            width={800}
                            height={800}
                            className="mt-3 object-contain flex justify-center items-center"
                        />
                        <div className="flex flex row">
                            <Typography sx={{ fontWeight: 'bold', marginRight: '.5rem', fontSize: theme.typography.h6.fontSize }}>{currProfile.name}</Typography>
                            <Typography sx={{ fontSize: theme.typography.h6.fontSize }}>{currProfile.age}</Typography>
                        </div>

                        <div className=""> {/* three info boxes*/}
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{ fontWeight: 'bold' }}>Location</Typography>
                                <Typography>{currProfile.location}</Typography>
                            </div>
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{ fontWeight: 'bold' }}>Interests</Typography>
                                {/* Map hobbies*/}
                                <div className="flex flex-wrap gap-1">
                                    {currProfile.hobbies.map((text) => (
                                        <Typography sx={{ padding: '0.2rem 0.75rem 0.2rem 0.75rem', borderRadius: '1rem', color: 'white', bgcolor: '#7D1538', fontSize: '0.75rem' }} key={count++}>{text}</Typography>
                                    ))}
                                </div>
                            </div>
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{ fontWeight: 'bold' }}>Looking For</Typography>
                                <Typography>??</Typography>
                            </div>
                        </div> {/* end three info boxes*/}

                        <div className="rounded-sm bg-[#A33E70] my-5">
                            <Typography sx={{ color: 'white', fontSize: '.75rem' }}>You have a new message from {currProfile.name}</Typography>
                        </div>

                        <div
                            onClick={() => setPage(2)}
                            className="w-full h-12 bg-[#A33E70] rounded-full cursor-pointer flex justify-center items-center text-center mb-10"
                        >
                            <Typography
                                sx={{
                                    fontSize: theme.typography.h5.fontSize,
                                    color: "white",
                                }}
                            >
                                Start Chatting
                            </Typography>

                        </div>
                    </section>
                </div>
            </div>
        );
    }

    if (page == 2) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl">
                <div className="h-[37rem] bg-white border-black border-8 rounded-3xl flex flex-col">
                    <div className="flex flex-row justify-between ml-7 mr-5 mt-5 mb-2">
                        <button style={{ cursor: 'pointer' }} onClick={() => clearMapping()}>&lt;</button>
                        <div onClick={() => setPage(3)}>
                            <Typography
                                sx={{
                                    fontSize: '10px',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    backgroundColor: '#A33E70',
                                    borderRadius: '.5rem',
                                    width: '7rem',
                                    textAlign: 'center',
                                    padding: '0.2rem 0 0.2rem 0',
                                    cursor: 'pointer'
                                }}
                            >
                                I&apos;m Ready to Vote!
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center"> {/* Header */}
                        <Image
                            src={blankProfilePic}
                            alt="Blank Profile Picture"
                            width={50}
                            height={50}
                            className="rounded-full mr-1"
                        />
                        <Typography sx={{ fontSize: '0.9rem' }}>Chat with <strong>{currProfile.name}</strong> </Typography>   {/* Header End */}
                    </div>
                    <div ref={messageDivRef} className="flex flex-col mt-5 h-1/2 overflow-auto"> {/* Message */}
                        {messageArr.map((text) => (
                            <div style={{
                                display: 'flex', flexDirection: 'row', justifyContent: messageInd % 2 === 0 ? 'flex-start' : 'flex-end',
                                marginLeft: messageInd % 2 === 0 ? '1.75rem' : '0', marginRight: messageInd % 2 === 0 ? '0' : '1.75rem',
                            }} key={count++}>
                                <Typography sx={{ textAlign: messageInd % 2 === 0 ? 'left' : 'right', marginBottom: '0.8rem', padding: '0.5rem 0.5rem 0.5rem 0.5rem', width: '50%', right: '0', borderRadius: '0.2rem', color: 'white', bgcolor: messageInd++ % 2 === 0 ? '#7D1538' : '#A33E70', fontSize: '0.75rem' }}>{text}</Typography>
                            </div>
                        ))}
                    </div> {/* Message End */}
                    <Typography sx={{ fontSize: '0.75rem', borderRadius: '0.25rem', textAlign: 'center', color: 'white', backgroundColor: '#A33E70', padding: '0.5rem 0 0.5rem 0', margin: '0 1.5rem 1rem 1.5rem' }}>Choose a Response ...</Typography>
                    <div className="h-1/2 overflow-auto"> {/* Choice start */}
                        {currResponses.map((response) => (
                            <div className="cursor-pointer rounded-sm flex-col justify-center border-2 border-[#A33E70] mb-1.5 mx-6.5" key={count++}
                                onClick={() => {
                                    if (index === -1) { //not set
                                        index = currResponses.indexOf(response);
                                        getDialogueArr();
                                    }
                                    setMessageArr(messageArr => [...messageArr, response]);
                                    currResponses.length = 0;
                                    optionCount = 1;
                                    if (responses.length !== 0 && responseInd < responses[index].length){
                                        currResponses.push(responses[index][responseInd].response1);
                                        currResponses.push(responses[index][responseInd].response2);
                                        // if (responses.length !== 0 && responseInd < responses.length) { //prevents start error or OOB
                                            // for (let i = 0; i < responses[responseInd].length; i++) {
                                            //     currResponses.push(responses[responseInd][i].response1);
                                            //     currResponses.push(responses[responseInd][i].response2);
                                            // }
                                            console.log(currResponses);
                                            setCurrResponses([...currResponses]);
                                            const temp = responseInd + 1;
                                            setResInd(temp);
                                            //get next dialogue
                                    } else if (responseInd >= responses.length) {
                                        // clearMapping();
                                        setPage(3);
                                    }
                                }}>
                                <Typography sx={{ padding: "0.35rem 0.35rem 0.35rem 0.35rem", fontSize: '0.65rem', color: 'black' }}>{optionCount++}. {response}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (page == 3) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl overflow-hidden">
                <div className="relative h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden px-4 gap-4">
                    <div className="flex flex-col gap-1">
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h5.fontSize,
                                    xl: theme.typography.h5.fontSize,
                                },
                                fontWeight: 'bold'
                            }}
                        >
                            So what's your verdict:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h6.fontSize,
                                    xl: theme.typography.h6.fontSize,
                                },
                            }}
                        >
                            Do you think this profile is a scam?
                        </Typography>
                    </div>
                    <div className="border-2 border-[#A33E70] rounded-md cursor-pointer" onClick = {() => { setFound(true); setPage(4);}}>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h6.fontSize,
                                    xl: theme.typography.h6.fontSize,
                                },
                                padding: '0.3rem'
                            }}
                        >
                            Yes - this looks like a romance scam attempt.
                        </Typography>
                    </div>
                    <div className="border-2 border-[#A33E70] rounded-md cursor-pointer" onClick = {() => { setPage(4);}}>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h6.fontSize,
                                    xl: theme.typography.h6.fontSize,
                                },
                                padding: '0.3rem'
                            }}
                        >
                            No - this seems legitimate.
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }

    if (page == 4) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl overflow-hidden">
                <div className="relative h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden px-4 gap-4">
                    <div className="flex flex-col gap-1">
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h5.fontSize,
                                    xl: theme.typography.h5.fontSize,
                                },
                                fontWeight: 'bold'
                            }}
                        >
                            {(scammerFound && currProfile.scammer) || (!scammerFound && !currProfile.scammer) ? "Correct!" : "Incorrect"}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h6.fontSize,
                                    xl: theme.typography.h6.fontSize,
                                },
                            }}
                        >
                            {(scammerFound && currProfile.scammer)
                                ? "Great job!"
                                : (!scammerFound && !currProfile.scammer)
                                    ? "Great job! Not scammer!"
                                    : (scammerFound && !currProfile.scammer)
                                        ? "Oops! This profile is actually legitimate."
                                        : "Oops! This profile is actually a scammer."
                            }
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}