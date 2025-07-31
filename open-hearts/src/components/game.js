"use client";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography} from "@mui/material";
import Image from "next/image";
import blankProfilePic from "../components/images/blank-pfp.png";

export default function Game({ gameStarted, currProfile }) {
    const theme = useTheme()
    const [page, setPage] = useState(0);

    // Page 0: Match page
    if (page === 0) {
        return (
            <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl">
                <div className="h-full w-full border-black border-8 rounded-3xl flex flex-col justify-center items-center text-center">
                    {
                        gameStarted ? 
                        <>
                        <Typography style={{fontSize: "18px"}}>{"You've matched with"}<br />
                            <strong>{currProfile ? currProfile : "Loading..."}{"!"}</strong>
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
                <div className="h-full w-full border-black border-8 rounded-3xl flex justify-center items-center text-center">
                    <Typography variant="h4" sx={{ mb: 2 }}>Profile Page</Typography>
                </div>
            </div>
        );
    }
}