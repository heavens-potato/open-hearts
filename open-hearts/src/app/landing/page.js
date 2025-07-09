"use client";

import { useTheme } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
import Image from 'next/image';
import Logo from "../../components/images/logo.svg";
import landingGraphic from "../../components/images/landing-graphic.svg"
import ScrollableCards from "../../components/scrollableCards.js";
import { motion } from "framer-motion";
export default function landing() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-0">

            <motion.div className="w-full h-full flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.0, ease: 'easeInOut', type: 'spring', damping: 10 }}
            >
                <Image src={Logo} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="w-[90%] md:w-[55%]" />
            </motion.div>

            <Image src={landingGraphic} alt="landing page graphic" className="w-full block pb-0 mb-0" />
            <section className="relative z-10 flex-grow w-full flex flex-col items-center px-8 text-center bg-linear-to-b from-[#C51D54] to-[#FCB24D] -mt-px">
                <div className="flex flex-col gap-8 md:gap-16 justify-center items-center z-5 w-[90%] md:w-[70%]" >
                    <div className="flex flex-col gap-4 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: theme.typography.h4.fontSize,
                                        sm: theme.typography.h4.fontSize,
                                        md: theme.typography.h4.fontSize,
                                        lg: theme.typography.h3.fontSize,
                                        xl: theme.typography.h3.fontSize
                                    },
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}
                            >
                                OVERVIEW
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: theme.typography.h6.fontSize,
                                        sm: theme.typography.h6.fontSize,
                                        md: theme.typography.h6.fontSize,
                                        lg: theme.typography.h4.fontSize,
                                        xl: theme.typography.h4.fontSize
                                    },
                                    color: 'white',
                                }}
                            >
                                Millions of people use online dating apps or social media to make authentic connections. Some find themselves as victims of <span className="font-black">fraud</span> instead.
                            </Typography>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        className="w-full"
                    >
                        <Divider sx={{
                            borderColor: 'white',
                            borderBottomWidth: '4px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="w-full"
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                        xs: theme.typography.h4.fontSize,
                                        sm: theme.typography.h4.fontSize,
                                        md: theme.typography.h4.fontSize,
                                        lg: theme.typography.h3.fontSize,
                                        xl: theme.typography.h3.fontSize
                                    },
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            EXPLORE
                        </Typography>
                    </motion.div>



                    <div>
                        {/* <ScrollableCards /> */}
                    </div>
                </div>
            </section>
        </div>
    )
}