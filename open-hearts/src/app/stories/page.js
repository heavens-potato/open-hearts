"use client";
import Header from "../../components/header.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme, darken } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function stories() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Header />
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.1 }}
                className="w-full flex flex-col items-center mt-20 mb-40 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 gap-8"
            >
                <div className="w-full h-full border-t-4 border-b-4 border-[#A30B37] flex flex-col py-12 px-6 md:px-12 justify-center items-center gap-4">
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
                            color: "black",
                        }}
                    >
                        Explore real stories of romance fraud and identify major red flags.
                    </Typography>
                </div>
                <Button
                    sx={{
                        backgroundColor: `${theme.palette.primary.main}`,
                        color: "white",
                        fontFamily: theme.typography.fontFamily,
                        paddingY: {
                            xs: "15px",
                            sm: "15px",
                            md: "33px",
                            lg: "33px"
                        },
                        borderRadius: "77px",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: darken(`${theme.palette.primary.main}`, 0.3), // mauve pink 
                        },
                        fontSize: {
                            xs: theme.typography.h5.fontSize,
                            sm: theme.typography.h5.fontSize,
                            md: theme.typography.h5.fontSize,
                            lg: theme.typography.h4.fontSize,
                            xl: theme.typography.h4.fontSize,
                        },
                        fontWeight: "bold",
                        textAlign: "center",
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '70%',
                            lg: '70%',
                            xl: '70%',
                        }
                    }}
                    component={Link}
                    href="/stories/lyn"
                >
                    START READING
                </Button>
            </motion.section>

            <motion.div
                className="w-full flex justify-start px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18"
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
            </motion.div>
        </div>
    )
}