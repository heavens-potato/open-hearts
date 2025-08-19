"use client";
import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../../components/header.js";
import { Typography } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import ExtensionIcon from '@mui/icons-material/Extension';
import PaidIcon from '@mui/icons-material/Paid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BannerGraphic from "../../../components/images/typical-case-curve.svg";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function typicalCase() {
    const theme = useTheme();
    const [openIndex, setOpenIndex] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const steps = useMemo(() => [
        {
            number: "1",
            title: "Meeting the Victim",
            icon: PeopleIcon
        },
        {
            number: "2",
            title: "Building the Connection",
            icon: ExtensionIcon
        },
        {
            number: "3",
            title: "Asking for Money",
            icon: PaidIcon
        },
        {
            number: "4",
            title: "Leaving the Victim",
            icon: PersonOutlineIcon
        }
    ]);

    let contentToDisplay;

    if (openIndex == 0) {
        contentToDisplay = (
            <motion.div
                className="h-full w-full flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    Romance scammers don’t wait for love. They <span className="font-bold">meticulously create an illusion</span>. This starts with introducing themselves to potential victims with <span className="font-bold">fake online profiles</span> created on dating apps, social media, or other messaging services.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    These profiles are <span className="font-bold">entirely fabricated</span>, using <span className="font-bold">stolen photos and made-up lives</span> to trick the victim into becoming interested.
                </Typography>
            </motion.div>
        )
    } else if (openIndex == 1) {
        contentToDisplay = (
            <motion.div
                className="h-full w-full flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    Once connected, the scammer begins a relentless barrage of <span className="font-bold">emotional manipulation</span>.
                    Victims are showered with <span className="font-bold">affection, compliments</span>, and <span className="font-bold">emotional personal stories</span> that are used by the scammer to build a <span className="font-bold">profound, intimate connection</span>.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    This phase, known as love-bombing, is designed to <span className="font-bold">disarm the victim</span> and <span className="font-bold">cut off any rational thoughts</span>.
                    Any attempts to verify the identity of the scammer are <span className="font-bold">skillfully dodged or diverted</span>, ensuring the victim is <span className="font-bold">never aware</span> of who is truly behind that dreamy facade.
                </Typography>
            </motion.div>
        )
    } else if (openIndex == 2) {
        contentToDisplay = (
            <motion.div
                className="h-full w-full flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    With the stage set, the scammer begins to unveil their true motive: <span className="font-bold">money</span>.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    A <span className="font-bold">sudden, urgent</span>, and often <span className="font-bold">heartbreaking</span> crisis emerges.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    Whether a family member’s medical emergency, business venture gone wrong, travel expenses to visit an ailing friend, or legal troubles, victims are bombarded with <span className="font-bold">desperate pleas for money</span>.
                </Typography>
            </motion.div>
        )
    } else {
        contentToDisplay = (
            <motion.div
                className="h-full w-full flex flex-col justify-center items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0 }}
            >
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    Even after receiving money, scammers will <span className="font-bold">continue pressing their victims for more</span>. New needs for assistance continue to occur, each more pressing than the last.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    They may even resort to <span className="font-bold">blackmail</span>, using personal photos and sensitive messages shared by the victim to extort further payments.
                </Typography>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: theme.typography.h6.fontSize,
                            sm: theme.typography.h6.fontSize,
                            md: theme.typography.h6.fontSize,
                            lg: theme.typography.h5.fontSize,
                            xl: theme.typography.h5.fontSize,
                        },
                    }}
                >
                    Once the victim’s funds have been fully depleted, scammers <span className="font-bold">vanish</span>, leaving behind a trail of financial and emotional destruction in their wake.
                </Typography>
            </motion.div>
        )
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />
            <motion.section
                className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-13 md:pt-20 bg-linear-to-b from-[#A30B37] from-[35%] to-[#FF934F] flex flex-col items-center gap-14"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
            >
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
                            textAlign: "center"
                        }}
                    >
                        A Typical Case of Fraud
                    </Typography>
                </motion.div>


                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 pb-13 md:pb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.5 }}
                >

                    {steps.map((card, index) => {
                        const IconComponent = card.icon;

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
                </motion.div>
            </motion.section>

            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
            >
                <Image src={BannerGraphic} alt="curved graphic on bottom of page introduction section" className="w-full h-auto" />
            </motion.div>


            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.3 }}
            >
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
            </motion.div> */}

            <motion.section
                className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex justify-center items-center my-20"
                id="case-steps">
                {
                    isMobile ?
                        <motion.div
                            className="w-full h-full flex flex-col gap-4"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="w-full flex flex-row justify-center items-center bg-[#C32553] px-16 py-6 cursor-pointer" onClick={() => setOpenIndex(0)}>
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
                                    Step 1: Meeting the Victim
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
                                openIndex == 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="w-full h-full flex justify-center items-center"
                                    >
                                        {contentToDisplay}
                                    </motion.div>
                                )
                            }
                            <div className="w-full flex justify-center items-center bg-[#A30B37] px-16 py-6 cursor-pointer" onClick={() => setOpenIndex(1)}>
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
                                        fontWeight: openIndex == 1 ? "bold" : "normal",
                                    }}
                                >
                                    Step 2: Building the Connection
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
                                openIndex == 1 && (
                                    <motion.div
                                        className="w-full h-full flex justify-center items-center"
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        {contentToDisplay}
                                    </motion.div>
                                )
                            }
                            <div className="w-full flex justify-center items-center bg-[#671339] px-16 py-6 cursor-pointer" onClick={() => setOpenIndex(2)}>
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
                                        fontWeight: openIndex == 2 ? "bold" : "normal",
                                    }}
                                >
                                    Step 3: Asking for Money
                                </Typography>
                                {
                                    openIndex == 2 ? <ExpandLessIcon
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
                                openIndex == 2 && (
                                    <motion.div
                                        className="w-full h-full flex justify-center items-center"
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        {contentToDisplay}
                                    </motion.div>
                                )
                            }
                            <div className="w-full flex justify-center items-center bg-[#460B26] px-16 py-6 cursor-pointer" onClick={() => setOpenIndex(3)}>
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
                                        fontWeight: openIndex == 3 ? "bold" : "normal",
                                    }}
                                >
                                    Step 4: Leaving the Victim
                                </Typography>
                                {
                                    openIndex == 3 ? <ExpandLessIcon
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
                                openIndex == 3 && (
                                    <motion.div
                                        className="w-full h-full flex justify-center items-center"
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        {contentToDisplay}
                                    </motion.div>
                                )
                            }
                        </motion.div>
                        :
                        <div className="w-full h-full flex flex-row gap-8 items-stretch" >
                            <motion.div
                                className="flex flex-col gap-4 w-[45%] h-full justify-center"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                <div className="w-full flex flex-row justify-center items-center bg-[#C32553] px-16 py-6 cursor-pointer hover:scale-105 ease-in-out duration-500" onClick={() => setOpenIndex(0)}>
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
                                        Step 1: Meeting the Victim
                                    </Typography>
                                    {
                                        openIndex == 0 &&
                                        <KeyboardArrowRightIcon
                                            sx={{
                                                fontSize: '2rem',
                                                color: 'white'
                                            }}
                                        />
                                    }
                                </div>
                                <div className="w-full flex justify-center items-center bg-[#A30B37] px-16 py-6 cursor-pointer hover:scale-105 ease-in-out duration-500" onClick={() => setOpenIndex(1)}>
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
                                            fontWeight: openIndex == 1 ? "bold" : "normal",
                                        }}
                                    >
                                        Step 2: Building the Connection
                                    </Typography>
                                    {
                                        openIndex == 1 &&
                                        <KeyboardArrowRightIcon
                                            sx={{
                                                fontSize: '2rem',
                                                color: 'white'
                                            }}
                                        />
                                    }
                                </div>
                                <div className="w-full flex justify-center items-center bg-[#671339] px-16 py-6 cursor-pointer hover:scale-105 ease-in-out duration-500" onClick={() => setOpenIndex(2)}>
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
                                            fontWeight: openIndex == 2 ? "bold" : "normal",
                                        }}
                                    >
                                        Step 3: Asking for Money
                                    </Typography>
                                    {
                                        openIndex == 2 &&
                                        <KeyboardArrowRightIcon
                                            sx={{
                                                fontSize: '2rem',
                                                color: 'white'
                                            }}
                                        />
                                    }
                                </div>
                                <div className="w-full flex justify-center items-center bg-[#460B26] px-16 py-6 cursor-pointer hover:scale-105 ease-in-out duration-500" onClick={() => setOpenIndex(3)}>
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
                                            fontWeight: openIndex == 3 ? "bold" : "normal",
                                        }}
                                    >
                                        Step 4: Leaving the Victim
                                    </Typography>
                                    {
                                        openIndex == 3 &&
                                        <KeyboardArrowRightIcon
                                            sx={{
                                                fontSize: '2rem',
                                                color: 'white'
                                            }}
                                        />
                                    }
                                </div>
                            </motion.div>
                            <motion.div
                                className="w-[55%] h-full flex justify-center items-center"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                {contentToDisplay}
                            </motion.div>
                        </div>
                }

            </motion.section>

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
            >
                <Link href="/learn" passHref >
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
                        Next →
                    </Typography>
                </Link>
            </motion.div>
        </div>
    )
}