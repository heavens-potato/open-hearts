"use client";

import React from "react";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header.js";
import { Typography } from "@mui/material";
import Image from "next/image";
import learnGraphic from "../../components/images/learn-component.svg";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FinancialToll from '../../components/financialToll.js';
import EmotionalToll from '../../components/emotionalToll.js';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Learn() {
    const theme = useTheme();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = useMemo(() => [
        {
            title: "The Staggering Financial Toll",
            content: <FinancialToll />
        },
        {
            title: "Beyond the Statistics: The Emotional Toll",
            content: <EmotionalToll />
        },
    ], []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />

            {/* Gradient Section */}
            <motion.section
                className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#B51745] to-[#D82E5F] pt-13 md:pt-20"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut"}}
            >
                <div className="pb-13 md:pb-20 flex flex-col items-left gap-6 md:gap-8 mx-auto" >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 1.0 }}
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
                        transition={{ duration: 1.0, delay: 1.5 }}
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
                            (Cross & Holt, 2023). It&apos;s a{" "}
                            <span className="font-bold underline">calculated deception</span>{" "}
                            that preys on <span className="font-bold underline">emotions and connection</span> to extract resources such as
                            money, credit card information, personal documents, and more.
                        </Typography>
                    </motion.div>
                </div>
            </motion.section>

            {/* Graphic Component Section */}
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
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
                        transition={{ duration: 1.0, delay: 2.0 }}
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
                            Romance fraud isn&apos;t just about financial loss. It&apos;s a devastating
                            crime with far-reaching impacts on individuals worldwide.
                        </Typography>
                    </motion.div>
                    <motion.div
                        className="flex justify-center md:justify-enditems-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 2.5 }}
                    >
                        <VolunteerActivismIcon
                            sx={{
                                width: {
                                    xs: '160px',
                                    sm: '160px',
                                    md: '160px',
                                    lg: '200px',
                                    xl: '240px',
                                },
                                height: 'auto',
                                color: theme.palette.primary.main
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Accordion Section */}
            <motion.section
                className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 3.0 }}
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
                                        xs: theme.typography.h6.fontSize,
                                        sm: theme.typography.h6.fontSize,
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
                            <div className="mt-3 text-black">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </motion.section>

            <motion.div
                className="w-full flex justify-end px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-13 md:py-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 4.5 }}
            >
                <Link href="/learn/typical-case" passHref >
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
    );
}
