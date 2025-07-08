"use client";

import { useTheme } from '@mui/material/styles';
import { Typography, Divider } from '@mui/material';
import Image from 'next/image';
import Logo from "../../components/images/logo.png";
import ScrollableCards from "../../components/scrollableCards.js";
import { motion } from "framer-motion";
export default function landing() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col items-center">

            <motion.div className="w-full h-full flex flex-col items-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring', stiffness: 100, damping: 10 }}
            >
                <Image src={Logo} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="w-[90%] md:w-[55%]" />
            </motion.div>
            
            <section className="relative z-10 flex-grow w-full flex flex-col items-center px-8 text-center bg-linear-to-b from-[#C11554] to-[#FFBF97]">
                <div className="flex flex-col gap-8 md:gap-16 justify-center items-center z-5 w-[90%] md:w-[70%] pt-28" >
                    <div className="flex flex-col gap-4 md:gap-8">
                        <Typography
                            variant="h3"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            OVERVIEW
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: 'white',
                            }}
                        >
                            Millions of people use online dating apps or social media to make authentic connections. Some find themselves as victims of <span className="font-black">fraud</span> instead.
                        </Typography>
                    </div>

                    <Divider sx={{
                        borderColor: 'white',
                        borderBottomWidth: '4px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }} />

                    <Typography
                        variant="h3"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        EXPLORE
                    </Typography>

                    <div>
                        {/* <ScrollableCards /> */}
                    </div>
                </div>
            </section>
        </div>
    )
}