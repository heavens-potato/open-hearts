"use client";

import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/header.js";
import { Typography } from "@mui/material";
import Image from "next/image";
import learnGraphic from "../../components/images/learn-component.svg";
import handHeartGraphic from "../../components/images/hand-heart.svg";

export default function learn() {
  const theme = useTheme();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Accordion items data - will change later
  const items = [
    {
      title: " The Staggering Financial Toll",
      content:
        "In 2024 alone, global losses to romance fraud amounted to nearly $4,000,000,000",
    },
    {
      title: "Beyond the Statistics: The Emotional Toll",
      content:
        "While the financial numbers are shocking, the damage extends far beyond money.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-0">
        <Header />

        {/* Gradient Section */}
        <section className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#B51745] to-[#D82E5F] pt-13 md:pt-20">
            <div className="pb-13 md:pb-20 flex flex-col items-left gap-6 md:gap-8 mx-auto">
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
                    <span className="font-black underline">
                    believing they are in a romantic relationship
                    </span>
                    , with the goal of{" "}
                    <span className="font-black underline">
                    exploiting them for personal gain
                    </span>{" "}
                    (Cross & Holt, 2023). It's a{" "}
                    <span className="font-black underline">calculated deception</span>{" "}
                    that preys on emotions and connection to extract resources such as
                    money, credit card information, personal documents, and more.
                </Typography>
            </div>
        </section>

        {/* Graphic Component Section */}
        <div className="w-full">
            <Image
            src={learnGraphic}
            alt="learn page graphic"
            className="w-full block"
            priority
            />
        </div>

        {/* Why Care Section */}
        <section className="w-full flex flex-col text-left pt-13 md:pt-23 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            {/* Grid Layout for Text and Image */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 pb-9 md:pb-16 md:gap-8 mx-auto">
                <div>
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
                </div>
                <div className="flex justify-center md:justify-enditems-center">
                    <Image
                        src={handHeartGraphic}
                        alt="hand heart graphic"
                        className="w-[160px] md:w-[200px] lg:w-[240px] h-auto"
                    />
                </div>
            </div>
        </section>

        {/* Accordion Section */}
        <section className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 py-4">
            {items.map((item, index) => (
                <div key={index} className="border-b-4 py-4 border-[#7D1538]" style={{ borderTop: index === 0 ? '4px solid #7D1538' : 'none'}} >

                    {/* Rows */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center text-left"
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
                        <div className="mt-3 text-black">
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
                                    {item.content}
                            </Typography>
                        </div>
                    )}
                </div>
            ))}
        </section>
    </div>
  );
}
