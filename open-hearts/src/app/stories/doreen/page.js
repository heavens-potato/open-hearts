"use client";
import Header from "../../../components/header.js";
import StoryTab from "../../../components/storyTab.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/system';

export default function Doreen() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const summary = [
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                Doreen was contacted on WhatsApp by a romance scammer claiming to be a <span className="font-bold">financial advisor “Adam”</span> living in <span className="font-bold">Switzerland and Monaco</span>.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                Adam manipulated her by <span className="font-bold">praising her appearance repeatedly</span> and promising the <span className="font-bold">chance to enter a raffle and win £100,000</span>.
                He then convinced her to download a remote control app, which he then used to secretly transfer nearly £30,000 from Doreen&apos;s accounts.
                Doreen <span className="font-bold">never notified her family</span> of her communications with Adam, and they only found out after her credit card was declined at a supermarket.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                While her family was able to recover around £18,000 from the bank, the effects on Doreen’s life were permanent.
                She passed away in November 2023 after two mini strokes suspected to be caused by the emotional toll the scam took.
            </Typography>
        </>
    ]

    const redFlags = [
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Online-Only Relationship and Avoidance of Meetings: </span>
                Like Lyn&apos;s relationship, Doreen&apos;s relationship with Adam was fully online.
                His claim to be living abroad meant Doreen had no chance of meeting him to verify his identity or supposedly impressive career.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Love-Bombing and Manipulation: </span>
                By repeatedly praising her appearance and promising a great reward if she followed his requests, Adam manipulated Doreen into installing the suspicious app.
                Scammers often use such tactics to quickly gain trust and bend victims to their will.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Suspicious and Unusual Requests: </span>
                It is extremely unusual and a major red flag for any financial advisor to request direct remote control over a client&apos;s bank accounts.
                This bypasses established normal procedures and is a huge sign something is wrong.
            </Typography>
        </>
    ]

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />

            {
                isMobile ?
                    <section className="flex flex-col sm:flex-row h-full gap-6 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 items-stretch md:justify-center mt-13 md:mt-18">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.1 }}
                            className="flex flex-col flex-grow justify-evenly w-full min-h-full sm:w-1/3 bg-linear-to-b to-[#A33E70] from-[#782B4F] p-6 rounded-2xl gap-6"
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: theme.typography.h4.fontSize,
                                        sm: theme.typography.h4.fontSize,
                                        md: theme.typography.h4.fontSize,
                                        lg: theme.typography.h3.fontSize,
                                        xl: theme.typography.h3.fontSize,
                                    },
                                    color: theme.palette.primary.crimsonRed,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Doreen’s Story
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
                                    color: "white",
                                }}
                            >
                                Doreen Daniel, an 81-year-old widow from West Sussex, England, had nearly £30,000 stolen by a vicious romance scammer who preyed on the recent death of her husband Gordon.
                            </Typography>
                        </motion.div>
                        <motion.div
                            className="w-full sm:w-2/3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.3 }}
                        >
                            <StoryTab summary={summary} redFlags={redFlags} />
                        </motion.div>
                    </section>
                    :
                    <section className="flex flex-col sm:flex-row h-full gap-6 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 items-stretch md:justify-center mt-13 md:mt-18">
                        <motion.div
                            className="w-full sm:w-2/3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.1 }}
                        >
                            <StoryTab summary={summary} redFlags={redFlags} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 0.3 }}
                            className="flex flex-col flex-grow justify-evenly w-full min-h-full sm:w-1/3 bg-linear-to-b to-[#A33E70] from-[#782B4F] p-6 rounded-2xl gap-6"
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: theme.typography.h4.fontSize,
                                        sm: theme.typography.h4.fontSize,
                                        md: theme.typography.h4.fontSize,
                                        lg: theme.typography.h3.fontSize,
                                        xl: theme.typography.h3.fontSize,
                                    },
                                    color: theme.palette.primary.crimsonRed,
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Doreen’s Story
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
                                    color: "white",
                                }}
                            >
                                Doreen Daniel, an 81-year-old widow from West Sussex, England, had nearly £30,000 stolen by a vicious romance scammer who preyed on the recent death of her husband Gordon.
                            </Typography>
                        </motion.div>
                    </section>
            }



            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-13 md:py-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.5 }}
            >
                <Link href="/stories/lyn" passHref >
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
                <Link href="/stories/anna" passHref >
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
        </div >
    )
}