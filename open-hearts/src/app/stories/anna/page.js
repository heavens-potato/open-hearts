"use client";
import Header from "../../../components/header.js";
import StoryTab from "../../../components/storyTab.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";

export default function Lyn() {
    const theme = useTheme();

    const summary = [
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                On Zoosk, Anna met &quot;Andrew&quot;, a Bulgarian food importer living in London. 
                The pair spoke for hours on the phone everyday, with Andrew <span className="font-bold">showering Anna with &quot;love and affection&quot;</span>.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                Although they made plans to meet up, they were <span className="font-bold">quickly canceled by Andrew</span>, who claimed that he had to make an urgent business trip to France.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                About five weeks into the relationship, Andrew began asking for money. 
                Requests started small, claiming a <span className="font-bold">work crisis</span> and needing help with <span className="font-bold">port charges for a food delivery</span>. 
                However, these requests rapidly escalated, eventually culminating in a fabricated story of being kidnapped and tortured by loan sharks, complete with photos of his supposedly broken arm.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                All in all, Anna sent &quot;Andrew&quot; nearly <span className="font-bold">£350,000</span> over the <span className="font-bold">course of a year</span>, enduring significant emotional distress.
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
                While Anna and Andrew made plans to meet up, they were quickly canceled by Andrew. 
                This prevented Anna from seeing him in real life and verifying his identity. 
                While they did have video calls, these were later discovered to have used superimposed videos, a sophisticated tactic to deceive victims and hide the scammer’s identity.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Rapid and Intense Declarations of Love: </span>
                Andrew quickly overwhelmed Anna with &quot;love and affection,&quot; a manipulative technique known as love bombing. 
                The goal behind love bombing is to strategically disarm the victim and establish trust early. 
                Anna herself felt &quot;strategically wrapped around his will.&quot;
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Urgent Requests for Financial Help: </span>
                A classic sign of romance fraud, Andrew began asking Anna for money just weeks into the relationship. 
                These requests started small, then quickly ballooned into increasingly dire and expensive emergencies, such as port charges, and eventually a fabricated kidnapping.
            </Typography>
        </>
    ]

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />

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
                        Anna&apos;s Story
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
                        Anna, a finance professor in her 50s, began using online dating platform Zoosk in 2019, hoping to meet someone and move on from her abusive marriage that ended 4 years ago. 
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

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-13 md:py-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.5 }}
            >
                <Link href="/stories/doreen" passHref >
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
                <Link href="/stories/rita" passHref >
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