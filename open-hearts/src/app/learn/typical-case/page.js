"use client";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../../components/header.js";
import { Typography } from "@mui/material";
import * as MuiIcons from '@mui/icons-material';
import BannerGraphic from "../../../components/images/typical-case-curve.svg";
import Image from "next/image";
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function typicalCase() {
    const theme = useTheme();

    const steps = useMemo(() => [
        {
            number: "1",
            title: "Meeting the Victim",
            icon: 'People'
        },
        {
            number: "2",
            title: "Building the Connection",
            icon: 'Extension'
        },
        {
            number: "3",
            title: "Asking for Money",
            icon: 'Paid'
        },
        {
            number: "4",
            title: "Leaving the Victim",
            icon: 'PersonOutline'
        }
    ]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <section className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-13 md:pt-20 bg-linear-to-b from-[#A30B37] from-[35%] to-[#FF934F] flex flex-col items-center gap-14">
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
                        textAlign: "center"
                    }}
                >
                    A Typical Case of Fraud
                </Typography>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-13 md:pb-20">
                    {steps.map((card, index) => {
                        const IconComponent = MuiIcons[card.icon];

                        return (
                            <div key={card.number} className="flex flex-col justify-center items-center gap-2 md:gap-8">
                                <Typography align="center" sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: {
                                        xs: theme.typography.h5.fontSize,
                                        sm: theme.typography.h4.fontSize,
                                        md: theme.typography.h4.fontSize,
                                        lg: theme.typography.h3.fontSize,
                                        xl: theme.typography.h3.fontSize,
                                    },
                                }}>
                                    {card.number}
                                </Typography>
                                <Typography align="center" sx={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: {
                                        xs: theme.typography.h6.fontSize,
                                        sm: theme.typography.h6.fontSize,
                                        md: theme.typography.h6.fontSize,
                                        lg: theme.typography.h5.fontSize,
                                        xl: theme.typography.h5.fontSize,
                                    },
                                }}>
                                    {card.title}
                                </Typography>
                                {IconComponent && (
                                    <IconComponent
                                        sx={{
                                            fontSize: {
                                                xs: '3rem',
                                                sm: '3rem',
                                                md: '4rem',
                                                lg: '4rem',
                                                xl: '4rem',
                                            },
                                            color: 'white',
                                        }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>

            <Image src={BannerGraphic} alt="curved graphic on bottom of page introduction section" className="w-full h-auto" />

            <Link href="#case-steps" className="flex flex-col items-center pt-4 pb-13">
                <Typography align="center" sx={{
                    color: 'black',
                    fontSize: theme.typography.h5.fontSize,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>
                    Continue
                </Typography>
                <KeyboardArrowDownIcon sx={{
                    color: 'black',
                    fontSize: theme.typography.h4.fontSize,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }} />
            </Link>

            <section className="w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32" id="case-steps">
                <h1>TYPICAL CASE BLEH BLEH BLEH</h1>
            </section>
        </div>
    )
}