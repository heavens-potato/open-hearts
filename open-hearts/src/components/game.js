"use client";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography} from "@mui/material";
import Image from "next/image";
import blankProfilePic from "../components/images/blank-pfp.png";

export default function Game({ gameStarted, currProfile }) {
    const theme = useTheme()
    const [page, setPage] = useState(0);
    let count = 0;

    // Page 0: Match page
    if (page === 0) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl">
                <div className="h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center">
                    {
                        gameStarted ? 
                        <>
                        <Typography style={{fontSize: "18px"}}>{"You've matched with"}<br />
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
                            <Typography sx={{fontWeight: 'bold', marginRight: '.5rem', fontSize: theme.typography.h6.fontSize}}>{currProfile.name}</Typography>
                            <Typography sx={{fontSize: theme.typography.h6.fontSize}}>{currProfile.age}</Typography>
                        </div>
                                
                        <div className=""> {/* three info boxes*/}
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{fontWeight: 'bold'}}>Location</Typography>
                                <Typography>{currProfile.location}</Typography>
                            </div>
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{fontWeight: 'bold'}}>Interests</Typography>
                                {/* Map hobbies*/}
                                <div className="flex flex-wrap gap-1">
                                    {currProfile.hobbies.map((text) => (
                                        <Typography sx={{padding: '0.2rem 0.75rem 0.2rem 0.75rem', borderRadius: '1rem', color: 'white', bgcolor: '#7D1538', fontSize: '0.75rem'}} key={count++}>{text}</Typography>
                                    ))}
                                </div>
                            </div>
                            <div className='px-2 bg-[#FFEFF6] rounded-md flex flex-col text-left mt-2'>
                                <Typography sx={{fontWeight: 'bold'}}>Looking For</Typography>
                                <Typography>??</Typography>
                            </div>
                        </div> {/* end three info boxes*/}
                    
                        <div className="rounded-sm bg-[#A33E70] my-5">
                            <Typography sx={{color: 'white', fontSize: '.75rem'}}>You have a new message from {currProfile.name}</Typography>
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
            <>
                <h1>NEXT PAGE</h1>
            </>
        )
    }
}