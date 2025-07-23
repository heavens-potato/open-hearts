"use client";
import Header from "../../components/header.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";
import RedFlag from "../../components/images/red-flag.svg";
import Image from "next/image";

export default function stories() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <section className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#A30B37] to-[#C60528] pt-13 md:pt-20">
                <div className="pb-13 md:pb-20 flex flex-col items-left gap-6 md:gap-8 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.1 }}
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
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            The Red Flags of Romance Fraud: How to Spot a Scam
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.2 }}
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
                                color: "white",
                            }}
                        >
                            Romance fraud is a confidence scheme in which a perpetrator deceives
                            someone into{" "}
                            <span className="font-bold underline">
                                believing they are in a romantic relationship
                            </span>
                            , with the goal of{" "}
                            <span className="font-bold underline">
                                exploiting them for personal gain
                            </span>{" "}
                            (Cross & Holt, 2023). It's a{" "}
                            <span className="font-bold underline">calculated deception</span>{" "}
                            that preys on <span className="font-bold underline">emotions and connection</span> to extract resources such as
                            money, credit card information, personal documents, and more.
                        </Typography>
                    </motion.div>
                </div>
            </section>

            <motion.div
                className="w-full"

            >
                <Image
                    src={RedFlag}
                    alt="red flag graphic"
                    className="w-full block"
                    priority
                />
            </motion.div>

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
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
                        ← Back [CHANGE THIS TO LAST VICTIM STORY]
                    </Typography>
                </Link>
                <Link href="/minigame" passHref >
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
        </div>
    )
}