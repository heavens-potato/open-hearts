"use client";
import Header from "../../components/header.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";
import RedFlag from "../../components/images/red-flag.svg";
import FlagSection from "../../components/flagSection.js";
import Image from "next/image";
import RedFlagIcon from "../../components/images/flag-icon.svg";
import GreenCheckIcon from "../../components/images/check-icon.svg";

export default function stories() {
    const theme = useTheme();

    const flagContent = [
        {
            type: "red",
            image: RedFlagIcon,
            title: "Rapid and Intense Declarations of Love: ",
            description: "Scammers try to overwhelm you with rapid declarations of love, excessive displays of affection, and constant attention. Their goal is to emotionally bind you to them as quickly as possible. This also includes using tragic or emotional stories to quickly build a deep connection."
        },
        {
            type: "green",
            image: GreenCheckIcon,
            title: "Slow it Down and Talk it Out:",
            description: "Never rush into a relationship, no matter how perfect a new connection may seem. Scammers love using inviting facades to lull you into trusting them and complying with their every request. Take your time, think it through, and if an interaction feels strange, reach out to a trusted friend or family member. Scammers love keeping you alone and in the dark, and talking it out can help you regain clarity."
        },
        {
            type: "red",
            image: RedFlagIcon,
            title: "Inconsistent or Vague Personal Details: ",
            description: "If you try to learn about their personal lives, you are often met with diversions or attempts to block the conversation. Scammers avoid specifics and provide only vague and scarce information."
        },
        {
            type: "red",
            image: RedFlagIcon,
            title: "Avoidance of In-Person Meets or Video Calls:",
            description: "Scammers will often avoid any attempts you make to verify their identity, like requesting to video call or meet in-person. They want to keep you in the dark as to who they truly are."
        },
        {
            type: "green",
            image: GreenCheckIcon,
            title: "Verify, Verify, Verify:",
            description: "Verify anything you see and hear. Whether it’s reverse searching their profile pictures using Google, asking them specific questions, or looking them up on social media. Double- and triple-check any and every claim your potential partner makes. Stay skeptical!"
        },
        {
            type: "red",
            image: RedFlagIcon,
            title: "Urgent Requests for Money or Financial Help:",
            description: "This is one of the biggest red flags! Scammers will ask you for money, financial assistance, or other valuables. They often create fake, urgent crises to manufacture tension and manipulate you into sending resources their way."
        },
        {
            type: "green",
            image: GreenCheckIcon,
            title: "Never Send Money:",
            description: "Golden rule, no exceptions. Just as you wouldn’t open your wallet and hand cash to strangers on the street, never send money or valuables to people you meet online!"
        },
        {
            type: "red",
            image: RedFlagIcon,
            title: "Quick Attempts to Move Off-Platform:",
            description: "Scammers will quickly try to move your conversation off dating apps or platforms into less secure personal messaging apps or email. This helps them hide their activities on platforms that are more difficult to track for authorities (AARP Minnesota)."
        },
        {
            type: "green",
            image: GreenCheckIcon,
            title: "Trust Your Gut:",
            description: "If something feels off, it probably is. If a scammer tries bringing you onto a platform you’ve never heard of or feels unusual, don't ignore that feeling. Your intuition is a powerful tool, listen to it!"
        },
    ]

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <section className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#A30B37] to-[#C60528] pt-13 md:pt-20">
                <div className="pb-13 md:pb-20 flex flex-col items-left gap-4 md:gap-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.1 }}
                    >
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
                            The Red Flags of Romance Fraud: How to Spot a Scam
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, delay: 0.2 }}
                    >
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
                            Romance scammers leave a trail of warning signs and red flags. Learning to spot these is key to protecting yourself!
                        </Typography>
                    </motion.div>
                </div>
            </section>

            <motion.div
                className="w-full mb-12"
            >
                <Image
                    src={RedFlag}
                    alt="red flag graphic"
                    className="w-full block"
                    priority
                />
            </motion.div>

            {flagContent.map((flag, index) => (
                <div key={index} className="w-full">
                    <FlagSection
                        key={index}
                        imageSrc={flag.image}
                        title={flag.title}
                        description={flag.description}
                        type={flag.type}
                    />

                    {(index === 1 || index === 4 || index === 6) && (
                        <div
                            className="h-1 my-8 mx-auto"
                            style={{
                                backgroundColor: "#7D1538",
                                width: "85%",
                                borderRadius: "2px",
                            }}
                        ></div>
                    )}
                </div>
            ))}

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
            >
                <Link href="/stories/rita" passHref >
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
                <Link href="/minigame" passHref >
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