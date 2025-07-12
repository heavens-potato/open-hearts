"use client";

import { useTheme, darken } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import landingImage from "../components/images/landing-image.svg";
import logoResponsive from "../components/images/logo-responsive.svg";
import AnimationFrame from "../components/images/landing-animation-frame.svg";
import AnimationBg from "../components/images/landing-animation-back.svg";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export default function Home() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [])

  const animationSize = 900;

  return (
    <>
      {isLoading ?
        <div className="min-h-screen w-full flex justify-center items-center flex-col gap-2">
          <div className="relative overflow-hidden"
            style={{ width: `${animationSize}px`, height: `${animationSize / 3}px` }}>
            <Image src={AnimationFrame} className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Loading animation outer frame, an empty heart" />
            <motion.div
              initial={{
                x: '-50%',
                y: '-50%',
              }}
              animate={{ y: 260, x: -500 }}
              transition={{ duration: 3.5, ease: "easeOut" }}

            >
              <Image src={AnimationBg} className="absolute z-10 top-1/2 left-1/2" alt="Loading animation background graphic, pink draining from the heart" />
            </motion.div>
          </div>
          <div className="h-full w-full justify-center items-center">
            <Typography
              sx={{
                fontSize: {
                  xs: theme.typography.h6.fontSize,
                  sm: theme.typography.h6.fontSize,
                  md: theme.typography.h6.fontSize,
                  lg: theme.typography.h5.fontSize,
                  xl: theme.typography.h5.fontSize
                },
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >Spot </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >the </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >Scam. </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >Save </motion.span>
              <motion.span 
                initial={{ opacity: 0  }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >a </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4  }}
              >Heart. </motion.span>
            </Typography>
          </div>
        </div>
        :
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: "20px",
              sm: "20px",
              md: "40px",
              lg: "40px",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="w-full flex justify-center"
          >
            <Image src={isMobile ? logoResponsive : landingImage} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="w-[90%] md:w-[60%]" />
          </motion.div>

          {/* Enter Exhibit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.5 }}
            className="w-full flex justify-center"
          >
            <Box sx={{
              width: {
                xs: '90%',
                sm: '60%',
                md: '60%',
                lg: '60%',
              }, display: "flex", justifyContent: "center"
            }}>
              <Button
                fullWidth
                sx={{
                  backgroundColor: `${theme.palette.primary.mauvePink}`,
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
                    backgroundColor: darken(`${theme.palette.primary.mauvePink}`, 0.3), // mauve pink 
                  },
                  fontSize: {
                    xs: theme.typography.h5.fontSize,
                    sm: theme.typography.h5.fontSize,
                    md: theme.typography.h3.fontSize,
                    lg: theme.typography.h3.fontSize,
                    xl: theme.typography.h3.fontSize,
                  },
                  fontWeight: "bold",
                  textAlign: "center"
                }}
                component={Link}
                href="/landing"
              >
                ENTER THE EXHIBIT
              </Button>
            </Box>
          </motion.div>
        </Box >
      }
    </>
  );
}
