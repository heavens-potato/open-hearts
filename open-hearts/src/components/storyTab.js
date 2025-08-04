"use client";

import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FlagIcon from '@mui/icons-material/Flag';
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useMediaQuery } from '@mui/system';

export default function StoryTab({ summary, redFlags }) {
    const theme = useTheme();

    const [openIndex, setOpenIndex] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            {
                isMobile ? (
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full flex flex-row justify-center items-center bg-[#A33E70] px-16 py-6" onClick={() => setOpenIndex(0)}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: {
                                        xs: theme.typography.h6.fontSize,
                                        sm: theme.typography.h6.fontSize,
                                        md: theme.typography.h6.fontSize,
                                        lg: theme.typography.h5.fontSize,
                                        xl: theme.typography.h5.fontSize,
                                    },
                                    textAlign: "center",
                                    fontWeight: openIndex == 0 ? "bold" : "normal",
                                }}
                            >
                                Story Details
                            </Typography>
                            {
                                openIndex == 0 ? <ExpandLessIcon
                                    sx={{
                                        fontSize: '3rem',
                                        color: 'white'
                                    }}
                                /> : <ExpandMoreIcon
                                    sx={{
                                        fontSize: '3rem',
                                        color: 'white'
                                    }}
                                />
                            }
                        </div>
                        {
                            openIndex === 0 &&
                            <ul className="list-disc pl-6 py-6">
                                {summary.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        }
                        <div className="w-full flex flex-row justify-center items-center bg-[#A30B37] px-16 py-6" onClick={() => setOpenIndex(1)}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: {
                                        xs: theme.typography.h5.fontSize,
                                        sm: theme.typography.h5.fontSize,
                                        md: theme.typography.h5.fontSize,
                                        lg: theme.typography.h4.fontSize,
                                        xl: theme.typography.h4.fontSize,
                                    },
                                    textAlign: "center",
                                    fontWeight: openIndex == 1 ? "bold" : "normal",
                                }}
                            >
                                Red Flags
                            </Typography>
                            {
                                openIndex == 1 ? <ExpandLessIcon
                                    sx={{
                                        fontSize: '3rem',
                                        color: 'white'
                                    }}
                                /> : <ExpandMoreIcon
                                    sx={{
                                        fontSize: '3rem',
                                        color: 'white'
                                    }}
                                />
                            }
                        </div>
                        {
                            openIndex === 1 &&
                            <ul className="list-disc pl-6 py-6">
                                {redFlags.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="flex flex-row gap-2 justify-evenly w-full">
                            <div
                                className={`flex flex-row gap-4text-center justify-center items-center w-1/2 ${openIndex === 0 ? 'rounded-b-none h-20 shadow-none' : 'rounded-b-2xl h-18 shadow-md shadow-black'} rounded-t-2xl cursor-pointer bg-[#A33E70]`}
                                onClick={() => setOpenIndex(0)}
                            >
                                <PersonSearchIcon
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h5.fontSize,
                                            sm: theme.typography.h5.fontSize,
                                            md: theme.typography.h5.fontSize,
                                            lg: theme.typography.h4.fontSize,
                                            xl: theme.typography.h4.fontSize,
                                        },
                                        color: "white",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Story Details
                                </Typography>
                            </div>
                            <div
                                className={`flex flex-row gap-4 bg-[#A30B37] text-center justify-center items-center w-1/2 ${openIndex === 1 ? 'rounded-b-none h-20 shadow-none' : 'rounded-b-2xl h-18 shadow-md shadow-black'} rounded-t-2xl cursor-pointer`}
                                onClick={() => setOpenIndex(1)}
                            >
                                <FlagIcon
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h5.fontSize,
                                            sm: theme.typography.h5.fontSize,
                                            md: theme.typography.h5.fontSize,
                                            lg: theme.typography.h4.fontSize,
                                            xl: theme.typography.h4.fontSize,
                                        },
                                        color: "white",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Red Flags
                                </Typography>
                            </div>
                        </div>
                        <div className={`w-full h-full overflow-y-scroll ${openIndex === 0 ? "border-[#A33E70]" : "border-[#A30B37]" } border-4 rounded-b-2xl p-6 scrollbar-hide rounded-b-2xl h-18 shadow-md shadow-black` }>
                            {
                                openIndex === 0
                                    ?
                                    <ul
                                        className="list-disc pl-6 gap-4"
                                    >
                                        {summary.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    :
                                    <ul className="list-disc pl-6 gap-4">
                                        {redFlags.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                            }
                        </div>
                    </div>
                )

            }

        </div>
    )
}