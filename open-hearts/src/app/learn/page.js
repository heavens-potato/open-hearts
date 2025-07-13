"use client";

import { useTheme } from "@mui/material/styles";
import Header from "../../components/header.js";
import { Typography } from "@mui/material";
import Image from "next/image";
import learnGraphic from "../../components/images/learn-component.svg";

export default function learn() {
  const theme = useTheme();

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-0">
      <Header />

      {/* Gradient Section */}
      <section className="w-full flex flex-col text-left bg-linear-to-b from-[#B51745] to-[#D82E5F] pt-24">
        <div className="pb-9 md:pb-16 flex flex-col items-left gap-6 md:gap-8 w-[90%] md:w-[70%] mx-auto">
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
            What is romance fraud?
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
            Romance fraud is a confidence scheme in which a perpetrator deceives
            someone into{" "}
            <span className="font-black underline">
              believing they are in a romantic relationship
            </span>
            , with the goal of{" "}
            <span className="font-black underline">
              exploiting them for personal gain
            </span>{" "}
            (Cross & Holt, 2023). It's a{" "}
            <span className="font-black underline">calculated deception</span>{" "}
            that preys on emotions and connection to extract resources such as
            money, credit card information, personal documents, and more.
          </Typography>
        </div>
      </section>

      {/* Image Section */}
      <div className="w-full">
        <Image
          src={learnGraphic}
          alt="learn page graphic"
          className="w-full block"
          priority
        />
      </div>
    </div>
  );
}
