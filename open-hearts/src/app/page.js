"use client";

import { useTheme, darken } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import landingImage from "../components/images/landing-image.png";
import landing from "./landing/page";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const theme = useTheme();

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
      <Image src={landingImage} alt="Open Hearts logo with the tagline Spot the Scam. Save a Heart." className="w-[90%] md:w-[60%]" />

      {/* Enter Exhibit Button */}
      <Box sx={{
        width: {
          xs: '90%',
          sm: '90%',
          md: '90%',
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
              xs: theme.typography.h4.fontSize,
              sm: theme.typography.h4.fontSize,
              md: theme.typography.h3.fontSize,
              lg: theme.typography.h3.fontSize,
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
    </Box >
  );
}
