"use client";

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import HeaderLogo from "../components/images/header-logo.svg";
import { motion } from "framer-motion";

export default function Header() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    const openResponsiveNav = () => {
        setShowResponsiveNav(true);
    }

    const closeResponsiveNav = () => {
        setShowResponsiveNav(false);
    }

    return (
        <header>
            {isMobile ? (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-screen"
                >
                    <div className="h-24 flex flex-row px-8 items-center justify-between gap-4 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                        <Link href="/landing">
                            <Image src={HeaderLogo} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="h-8 w-auto" />
                        </Link>
                        <MenuIcon
                            sx={{
                                fontSize: '1.7rem'
                            }}
                            onClick={openResponsiveNav}
                        />
                    </div>
                    {showResponsiveNav && (
                        <motion.div
                            className="fixed right-0 top-0 h-full w-2/3 md:w-1/2 bg-white drop-shadow-xl"
                            initial={{ x: 100 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="w-full flex justify-end p-4">
                                <CloseIcon
                                    sx={{
                                        fontSize: '1.7rem',
                                        cursor: 'pointer'
                                    }}
                                    onClick={closeResponsiveNav}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-8 pt-8">

                                <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/learn"
                                >
                                    Learn
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/stories"
                                >
                                    Stories
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/red-flags"
                                >
                                    Red Flags
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/minigame"
                                >
                                    Game
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/resources"
                                >
                                    Resources
                                </Typography>
                                {/* <Typography
                                    variant="h6"
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    component={Link}
                                    href="/about"
                                >
                                    About
                                </Typography> */}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-screen h-20 flex flex-row px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 items-center z-10 bg-white"
                >
                    <Link href="/landing" className="w-[40%]">
                        <Image src={HeaderLogo}
                            alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart."
                            className="h-10 w-auto object-fill cursor-pointer" />
                    </Link>
                    <div className="w-[60%] h-full flex flex-row gap-12 justify-end items-center">
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/learn"
                        >
                            Learn
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/stories"
                        >
                            Stories
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/red-flags"
                        >
                            Red Flags
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/minigame"
                        >
                            Game
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/resources"
                        >
                            Resources
                        </Typography>
                        {/* <Typography
                            variant="h6"
                            sx={{
                                cursor: 'pointer'
                            }}
                            component={Link}
                            href="/about"
                        >
                            About
                        </Typography> */}
                    </div>
                </motion.div>
            )}
        </header>
    )
}