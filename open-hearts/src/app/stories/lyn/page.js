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
                After meeting online in 2020, the two engaged in an <span className="font-bold">intimate, online-only relationship</span>.
                Derek claimed to Lyn that he had recently <span className="font-bold">moved from Manchester to Dubai</span> where he supposedly owned a mineral company.
                He used <span className="font-bold">edited pictures</span> stolen from the internet to convince Lyn that he, and the relationship, were genuine.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                As their relationship deepened, Derek began requesting money from Lyn.
                He claimed to be using them for <span className="font-bold<">medical</span> and <span className="font-bold">business-related</span> expenses.
                He also pushed her to open <span className="font-bold">multiple cryptocurrency accounts</span> to send money to others that he claimed to be his business associates.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                Lyn genuinely believed she was helping Derek with urgent medical bills and business expenses, but it was all a <span className="font-bold">calculated lie</span>.
                She was being expertly taken advantage of and was ultimately defrauded <span className="font-bold">over £50,000</span>, including her <span className="font-bold">entire pension</span>.
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
                Derek claimed to be abroad for the duration of the relationship, preventing Lyn from meeting him in person to verify his identity.
                The entirely online nature of their relationship made it easy for him to hide his true self.
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
                Using excuses such as medical and business-related expenses, Derek was able to manufacture various urgent scenarios to convince Lyn to transfer large sums of money.
            </Typography>
        </>,
        <>
            <Typography
                sx={{
                    fontSize: theme.typography.h6.fontSize,
                    color: "black",
                }}
            >
                <span className="font-bold">Pressure to use Cryptocurrency Accounts: </span>
                Encouraging Lyn to open multiple cryptocurrency accounts and send money to various &quot;associates&quot; is a major red flag. Scammers often prefer cryptocurrencies as well as having multiple receiving accounts as they are more difficult to track.
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
                        Lyn&apos;s Story
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
                        Lyn, a woman in her 60s from Warrington, England, became a victim of romance fraud, losing over £50,000 to a scammer named &quot;Derek.&quot;
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
                <Link href="/stories" passHref >
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
                        Next →
                    </Typography>
                </Link>
            </motion.div>
        </div >
    )
}