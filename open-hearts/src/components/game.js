"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import blankProfilePic from "../components/images/blank-pfp.png";
import gameStartCurve from "../components/images/GameStartCurve1.svg"
import { Key } from "@mui/icons-material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Game({ gameStarted, currProfile, responses, options, endingText, onRestart }) {
    const theme = useTheme()
    const [page, setPage] = useState(0);
    const [messageArr, setMessageArr] = useState(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
    const [currResponses, setCurrResponses] = useState([]);
    const [responseInd, setResInd] = useState(0);
    const [dialogueInd, setDialInd] = useState(0);
    const [dialogueArr, setDialogues] = useState([]);
    const [scammerFound, setFound] = useState(false);
    const [index, setIndex] = useState(-1);
    const messageDivRef = useRef(null);

    let count = 0;
    let messageInd = 0;
    let optionCount = 1;

    useEffect(() =>{
        if(index !== -1){
            currResponses.length = 0;
            getDialogueArr();
            if (responses.length !== 0 && responseInd < responses[index].length){
                currResponses.push(responses[index][responseInd].response1);
                currResponses.push(responses[index][responseInd].response2);
                setCurrResponses([...currResponses]);
                const temp = responseInd + 1;
                setResInd(temp);
            } else if (responseInd >= responses.length) {
                // clearMapping();
                setPage(3);
            }
        }
    }, [index])
    
    useEffect(() => {
        setCurrResponses([...options]);
    }, [options.length]);

    useEffect(() => {
        if (messageDivRef.current) {
            messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight;
        }
    }, [messageArr.length])

    useEffect(() =>{
        if (dialogueArr.length !== 0){
            setMessageArr(messageArr => [...messageArr, dialogueArr[dialogueInd]]);
            setDialInd(dialogueInd + 1);
        }
    }, [dialogueArr.length])

    const getDialogueArr = async () => {
        // if (!currProfile || !currProfile.profileId) return; // Prevent fetch if not ready
        if (!currProfile) return;
        const response = await fetch(`http://localhost:8080/api/dialogue?profileId=${currProfile.profileId}&option=${"option" + index}`);
        if (!response.ok) {
            // Optionally handle error
            return;
        }
        const text = await response.text();
        if (!text) return; // Prevent parsing empty response
        const arr = JSON.parse(text); //gets dialogue arr
        setDialogues([...arr]);
    }

    const clearMapping = () => {
        setMessageArr(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
        setResInd(0);
        setCurrResponses([...options]);
        setDialInd(0);
        setIndex(-1);
        setDialogues([]);
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
                                <Typography style={{ fontSize: "0.95rem" }}>{"You've matched with"}<br />
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
                                    sx={{ color: "black", cursor: "pointer", textDecoration: "underline", mt: 2, fontSize: "0.85rem" }}
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
                            : <Typography>Press 'PLAY' To Begin</Typography>
                    }
                </div>
            </div>
        )
    }
    // Page 1: Profile page
    if (page === 1) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl overflow-hidden">
                <div className="relative h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden">                    
                    <section className="relative w-full h-[35rem] rounded-2xl bg-white flex flex-col justify-start px-2 overflow-auto scrollbar-hide">
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
                            <div className='p-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2 shadow-lg'>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Location</Typography>
                                <Typography>{currProfile.location}</Typography>
                            </div>
                            <div className='p-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2 shadow-lg'>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Interests</Typography>
                                {/* Map hobbies*/}
                                <div className="flex flex-wrap gap-1">
                                    {currProfile.hobbies.map((text) => (
                                        <Typography sx={{ padding: '0.2rem 0.75rem 0.2rem 0.75rem', borderRadius: '1rem', color: 'white', bgcolor: '#7D1538', fontSize: '0.85rem' }} key={count++}>{text}</Typography>
                                    ))}
                                </div>
                            </div>
                            {/* <div className='p-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2 shadow-lg'>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Looking For</Typography>
                                <Typography>??</Typography>
                            </div> */}
                        </div> {/* end three info boxes*/}

                        <div className="rounded-bl-xs bg-[#A33E70] my-5 p-2 rounded-xl text-left">
                            <Typography sx={{ color: 'white', fontSize: '0.85rem' }}>You have a new message from {currProfile.name}</Typography>
                        </div>

                        <div
                            onClick={() => setPage(2)}
                            className="w-full p-2 bg-[#7D1538] rounded-full cursor-pointer flex justify-center items-center text-center mb-10"
                        >
                            <Typography
                                sx={{
                                    fontSize: theme.typography.h6.fontSize,
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
                <div className="relative h-full w-full border-black border-8 rounded-3xl flex flex-col">
                    <div className="flex flex-row justify-center items-center mt-4 gap-4"> {/* Header */}
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
                                <Typography sx={{ textAlign: messageInd % 2 === 0 ? 'left' : 'right', marginBottom: '0.8rem', padding: '0.5rem 0.5rem 0.5rem 0.5rem', width: '50%', right: '0', borderRadius: '1rem', borderBottomLeftRadius: messageInd % 2 === 0 ? '0.125rem' : '1rem', borderBottomRightRadius: messageInd % 2 === 0 ? '1rem' : '0.125rem', color: 'white', bgcolor: messageInd++ % 2 === 0 ? '#7D1538' : '#A33E70', fontSize: '0.75rem' }}>{text}</Typography>
                            </div>
                        ))}
                    </div> {/* Message End */}
                    <Typography sx={{ fontSize: '0.75rem', borderRadius: '0.25rem', textAlign: 'center', color: 'white', backgroundColor: '#A33E70', padding: '0.5rem 0 0.5rem 0', margin: '0 1.5rem 1rem 1.5rem' }}>Choose a Response ...</Typography>
                    <div className="max-h-auto overflow-auto"> {/* Choice start */}
                        {(index !== -1 && dialogueInd >= dialogueArr.length)
                            ? (
                                // Special menu with options to Keep Talking or Vote
                                <>
                                    <div className="cursor-pointer rounded-sm flex-col justify-center border-2 border-[#A33E70] mb-1.5 mx-6.5"
                                        onClick={() => {
                                            // Reset to options menu without clearing chat history
                                            setCurrResponses([...options]);
                                            setMessageArr(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
                                            setResInd(0);
                                            setDialInd(0);
                                            setIndex(-1);
                                            setDialogues([]);
                                        }}
                                    >
                                        <Typography sx={{ padding: "0.35rem", fontSize: '0.75rem', color: 'black' }}>
                                            Keep Talking
                                        </Typography>
                                    </div>
                                    <div
                                        className="cursor-pointer rounded-sm flex-col justify-center border-2 border-[#A33E70] mb-1.5 mx-6.5"
                                        onClick={() => setPage(3)}
                                    >
                                        <Typography sx={{ padding: "0.35rem", fontSize: '0.75rem', color: 'black' }}>
                                            I'm Ready to Vote!
                                        </Typography>
                                    </div>
                                </>
                            )
                            : (
                                // Normal response mapping
                                currResponses.map((response, idx) => (
                                    <div
                                        className="cursor-pointer rounded-sm flex-col justify-center border-2 border-[#A33E70] mb-1.5 mx-6.5"
                                        key={idx}
                                        onClick={() => {
                                            setMessageArr(messageArr => [...messageArr, response]);
                                            optionCount = 1;
                                            if (index === -1) { //not set
                                                const temp = currResponses.indexOf(response);
                                                setIndex(temp);
                                            } else {
                                                currResponses.length = 0;

                                                if (dialogueInd < dialogueArr.length && dialogueArr[dialogueInd]) {
                                                    setMessageArr(messageArr => [...messageArr, dialogueArr[dialogueInd]]);
                                                    setDialInd(dialogueInd + 1); 
                                                } 

                                                if (responses.length !== 0 && responseInd < responses[index].length){
                                                    currResponses.push(responses[index][responseInd].response1);
                                                    currResponses.push(responses[index][responseInd].response2);
                                                    setCurrResponses([...currResponses]);
                                                    setResInd(responseInd + 1);
                                                } else if (responseInd >= responses.length) {
                                                    setPage(3);
                                                }
                                            }
                                        }}
                                    >
                    <Typography sx={{ padding: "0.35rem", fontSize: '0.75rem', color: 'black' }}>
                        {idx + 1}. {response}
                    </Typography>
                </div>
            ))
        )
    }
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
                    <div className="flex flex-col gap-1 overflow-auto">
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h5.fontSize,
                                    xl: theme.typography.h5.fontSize,
                                },
                                fontWeight: 'bold',
                                marginTop: '1.5rem',
                                marginBottom: '.5rem'
                            }}
                        >
                            {(scammerFound && currProfile.scammer) || (!scammerFound && !currProfile.scammer)
                                ? (<><CheckCircleOutlineIcon style={{fontSize: '50px', color: 'green'}}/> Correct!</>)
                                : (<><HighlightOffIcon style={{fontSize: '50px', color: 'red'}}/> Incorrect</>)
                            }
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '0.85rem'
                            }}
                        >
                            {(scammerFound && currProfile.scammer)
                                ? <>Great job! {currProfile.name}&apos;s profile was <strong>a scam.</strong> {currProfile.name} displayed multiple red flags throughout the conversation.</>
                                : (!scammerFound && !currProfile.scammer)
                                    ? <>Great job! {currProfile.name}&apos;s profile was <strong>not a scam.</strong> {currProfile.name} displayed multiple green flags throughout the conversation.</>
                                    : (scammerFound && !currProfile.scammer)
                                        ? <>Sorry, {currProfile.name}&apos;s profile was <strong>not a scam.</strong> {currProfile.name} displayed multiple green flags throughout the conversation.</>
                                        : <>Sorry {currProfile.name}&apos;s profile was <strong>a scam.</strong> {currProfile.name} displayed multiple red flags throughout the conversation.</>
                            }
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '0.85rem',
                            }}
                        >
                            {endingText}
                        </Typography>
                        <div className="border-2 border-[#A33E70] rounded-md cursor-pointer mb-5 mt-2" 
                            onClick={() => {
                                    setPage(0);
                                    setMessageArr(["Hi, nice to meet you! Your profile looked interesting; I want to get to know you better!"]);
                                    setCurrResponses([...options]);
                                    setResInd(0);
                                    setDialInd(0);
                                    setDialogues([]);
                                    setFound(false);
                                    setIndex(-1);
                                    if (onRestart) onRestart();
                                }}
                            >
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: theme.typography.h6.fontSize,
                                    sm: theme.typography.h6.fontSize,
                                    md: theme.typography.h6.fontSize,
                                    lg: theme.typography.h5.fontSize,
                                    xl: theme.typography.h5.fontSize,
                                },
                                padding: '0.3rem'
                            }}
                        >
                            Restart
                        </Typography>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}