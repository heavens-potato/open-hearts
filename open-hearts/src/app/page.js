"use client";

import { useTheme, darken } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import landingImage from "../components/images/landing-image.png";
import logoResponsive from "../components/images/logo-responsive.png";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/system';

export default function Home() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
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
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: 'easeInOut', type: 'spring', damping: 10 }}
        className="w-full flex justify-center"
      >
        <Image src={isMobile ? logoResponsive : landingImage} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="w-[90%] md:w-[60%]" />
      </motion.div>


      {/* Enter Exhibit Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
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
  );
}
