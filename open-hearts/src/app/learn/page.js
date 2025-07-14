"use client";

import React from "react";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header.js";
import { Typography } from "@mui/material";
import Image from "next/image";
import learnGraphic from "../../components/images/learn-component.svg";
import handHeartGraphic from "../../components/images/hand-heart.svg";
import America from "../../components/images/america.svg";
import { motion } from "framer-motion";

export default function learn() {
    const theme = useTheme();

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Accordion items data - will change later
    
    const items = useMemo(() => [
        {
            title: "The Staggering Financial Toll",
            content:
                <div className="w-full h-full gap-12 py-12">
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
                        In 2024 alone, global losses to romance fraud amounted to nearly
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h4.fontSize,
                                sm: theme.typography.h2.fontSize,
                                md: theme.typography.h1.fontSize,
                                lg: '8rem',
                                xl: '10rem',
                            },
                            background: `linear-gradient(90deg, ${theme.palette.primary.crimsonRed}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        $4,000,000,000
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
                            color: "black",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        (Nasdaq, 2024)
                    </Typography>
                    <div className="w-full h-full flex flex-col md:flex-row pt-12 gap-12 items-center">
                        <Image src={America} alt="orange graphic of American map" className="w-full md:w-[50%] h-auto object-fit"/>
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
                            justifyContent: "center",
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '100%',
                                lg: '50%',
                                xl: '50%'
                            },
                        }}
                    >
                        In the United States, romance fraud cost a total of <span className="font-bold">$1.14 billion</span> in 2023, with over <span className="font-bold">60,000 cases</span> reported to the Federal Trade Commission alone. 
                        Median losses exceeded $2,000 per person, <span className="font-bold">the highest out of any form of imposter scam</span> (Fair, 2024). Losses nearly doubled between 2022 and 2023 (Knight, 2025).
                    </Typography>
                    </div>
                </div>
        },
        {
            title: "Beyond the Statistics: The Emotional Toll",
            content:
                "While the financial numbers are shocking, the damage extends far beyond money.",
        },
    ]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-0">
            <Header />

            {/* Gradient Section */}
            <section className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#B51745] to-[#D82E5F] pt-13 md:pt-20">
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
                            What is romance fraud?
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

            {/* Graphic Component Section */}
            <motion.div
                className="w-full"

            >
                <Image
                    src={learnGraphic}
                    alt="learn page graphic"
                    className="w-full block"
                    priority
                />
            </motion.div>

            {/* Why Care Section */}
            <section className="w-full flex flex-col text-left pt-13 md:pt-23 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                {/* Grid Layout for Text and Image */}
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 pb-9 md:pb-16 md:gap-8 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.3 }}
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
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >
                            Why should you care?
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
                                color: "black",
                            }}
                        >
                            Romance fraud isn't just about financial loss. It's a devastating
                            crime with far-reaching impacts on individuals worldwide.
                        </Typography>
                    </motion.div>
                    <motion.div
                        className="flex justify-center md:justify-enditems-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.4 }}
                    >
                        <Image
                            src={handHeartGraphic}
                            alt="hand heart graphic"
                            className="w-[160px] md:w-[200px] lg:w-[240px] h-auto"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Accordion Section */}
            <motion.section
                className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.5 }}
            >
                {items.map((item, index) => (
                    <div key={index} className="border-b-4 py-4 border-[#7D1538]" style={{ borderTop: index === 0 ? '4px solid #7D1538' : 'none' }} >

                        {/* Rows */}
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center text-left cursor-pointer"
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: theme.typography.h5.fontSize,
                                        sm: theme.typography.h5.fontSize,
                                        md: theme.typography.h5.fontSize,
                                        lg: theme.typography.h4.fontSize,
                                        xl: theme.typography.h4.fontSize,
                                    },
                                    color: "black",
                                    fontWeight: openIndex === index ? "bold" : "medium",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <span className="text-4xl font-bold text-black">
                                {openIndex === index ? "–" : "+"}
                            </span>
                        </button>

                        {/* Content */}
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0 }}
                                className="mt-3 text-black"
                            >
                                <div>
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </motion.section>
        </div>
    );
}
