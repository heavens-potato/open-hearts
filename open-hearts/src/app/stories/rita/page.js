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
                While they initially met on a social media platform, the scammer was quick to <span className="font-bold">shift their communications to an encrypted platform</span>, claiming a desire to have their relationship and conversations privately.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                The “celebrity” claimed to be going through a divorce, establishing an <span className="font-bold">easy basis for emotional connection</span> as Rita had been going through a divorce at the same time. 
                This emotional story enabled their connection to <span className="font-bold">quickly deepen and become romantic</span>.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                Soon after, the celebrity began requesting money for <span className="font-bold">various events</span> and even <span className="font-bold">meet and greets</span>. 
                All funds were exclusively <span className="font-bold">requested and transferred via Bitcoin</span>. 
                In total, Rita lost <span className="font-bold">nearly $90,000</span> and significant emotional distress. 
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
               <span className="font-bold">Quick Attempt to Move Off-Platform:  </span>
               The scammer's immediate request to shift conversations from a public social media platform to a private, encrypted messaging app is a significant red flag. 
               This tactic enables the scammer to isolate the victim and hide activities from law enforcement. 
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Emotionally Intense Origin Story: </span>
                By utilizing a tragic, but common, backstory of going through a divorce, the scammer was able to gain Rita’s trust early on and make it impossible for Rita to leave their side. 
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Unusual and Unprofessional Requests for Money: </span>
                A legitimate celebrity would never request personal funds from a private contact for events or charge for a meet and greet through an encrypted platform. 
                Such requests are highly abnormal and indicate a scam. 
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Demand for Cryptocurrency-Only Payments: </span>
                The reliance on Bitcoin to transfer funds is a major peculiarity and common red flag in romance fraud. 
                Cryptocurrency transactions are much harder to track than standard money transfer platforms, making it favorable for scammers to move funds around.
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
                            className="flex flex-col flex-grow justify-evenly w-full min-h-full sm:w-1/3 bg-linear-to-b from-[#7D1538] to-[#A30B37] p-6 rounded-2xl gap-6"
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
                                Rita’s Story
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
                                Rita, a senior living in Montana, lost over $90,000 to a romance scammer posing to be a celebrity. 
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
                            className="flex flex-col flex-grow justify-evenly w-full min-h-full sm:w-1/3 bg-linear-to-b from-[#7D1538] to-[#A30B37] p-6 rounded-2xl gap-6"
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
                                Rita’s Story
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
                                Rita, a senior living in Montana, lost over $90,000 to a romance scammer posing to be a celebrity. 
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
                        ← Back
                    </Typography>
                </Link>
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
                        Next →
                    </Typography>
                </Link>
            </motion.div>
        </div >
    )
}