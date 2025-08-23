"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

export default function FlagSection({ imageSrc, title, description, type }) {
    const theme = useTheme();

    const titleColor = type === "red" ? "#A30B37" : "#139B62";

    return (
        <>
            <motion.section
                className="w-full flex flex-col md:flex-row items-center px-6 sm:px-6 md:px-10 lg:px-12 xl:px-30 py-4 my-5"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
            >
                <motion.div className="flex-shrink-0 w-32 h-32" >
                    <Image
                        src={imageSrc}
                        alt={`${type} flag icon`}
                        width={75}
                        height={75}
                    />
                </motion.div>
                <motion.div className="flex flex-col text-left flex-grow" >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: titleColor,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        {title}
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
                        {description}
                    </Typography>
                </motion.div>
            </motion.section>
        </>
    );
}