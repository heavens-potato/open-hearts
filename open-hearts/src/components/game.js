"use client";

import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Game({ gameStarted }) {
    const theme = useTheme()

    return (
        <div className="h-[37rem] w-[19rem] border-gray-500 border-4 rounded-4xl">
            <div className="h-full w-full border-black border-8 rounded-3xl flex justify-center items-center text-center">
                {
                    gameStarted ?  <Typography>Yayyyy you started the game</Typography> : <Typography>WEEEEEEEEEEEEEE GAME PLACEHOLDER</Typography>
                }
            </div>
        </div>

    )
}