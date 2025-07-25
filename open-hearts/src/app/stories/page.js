"use client";
import Header from "../../components/header.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";

export default function stories() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />
            <motion.section
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                transition = {{ duration: 1.0, delay: 0.1 }}
                className="w-full flex flex-col items-center mt-20 mb-40 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
            >
                <div className="w-full bg-[#A33E70] rounded-2xl flex flex-col pt-12 pb-24 px-6 md:px-12">
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
                        Stories of Romance Fraud
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
                        Explore real stories of romance fraud and identify major red flags.
                    </Typography>
                </div>
            </motion.section>

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
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
                        ← Back
                    </Typography>
                </Link>
                <Link href="/stories/lyn" passHref >
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