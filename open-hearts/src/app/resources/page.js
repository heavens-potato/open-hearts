"use client";
import Header from "../../components/header.js";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from 'next/link';
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import resourcesCurve from "../../components/images/resources-curve.svg";
import SupportIcon from '@mui/icons-material/Support';
import ReportIcon from '@mui/icons-material/Report';
import LinkIcon from '@mui/icons-material/Link';

export default function stories() {
    const theme = useTheme();

    const reportItems = [
        {
            title: "Your Bank or Financial Institution:",
            description: "This is the immediate first step to take after falling victim to romance fraud. If you sent money, gift cards, or cryptocurrency, contact your bank, credit card company, or the platform you used (e.g., Zelle, Venmo, Western Union, Bank of America, cryptocurrency exchange, etc)."
        },
        {
            title: "The Platform Where the Scam Occurred:",
            description: "Immediately report the scammer's profile and activities to the dating app, social media site, or any online platform where you first interacted with them. This helps the platform remove fraudulent accounts and can prevent others from being victimized."
        },
        {
            title: "FBI Internet Crime Complaint Center:",
            description: "The FBI’s central hub for reporting and investigating cyber-enabled crime.",
            displayLink: "ic3.gov",
            link: "https://www.ic3.gov"
        },
        {
            title: "FTC ReportFraud.ftc.gov:",
            description: "The FTC’s consolidated fraud reporting website.",
            displayLink: "ReportFraud.ftc.gov",
            link: "http://ReportFraud.ftc.gov"
        },
        {
            title: "Local Law Enforcement Agencies:",
            description: "If you or someone you know is in urgent, immediate danger, call 911 or reach out to your local law enforcement agency."
        },
        {
            title: "Consider Legal Recourse:",
            description: "Law enforcement generally plays a more limited role in recovering lost funds. If you have experienced significant financial loss, you may want to consult with an attorney to explore civil legal options. You can typically find a lawyer by contacting your state's bar association for referrals or by searching online for attorneys specializing in fraud recovery."
        },
    ]

    const supportItems = [
        {
            title: "Professional Mental Health Support:",
            description: "Experiencing fraud can lead to significant emotional distress, including trauma, grief, anxiety, and depression. Consider seeking support from a licensed therapist or counselor who can help you process your experience."
        },
        {
            title: "Advocating Against Romance Scams (AARS):",
            description: "A nonprofit organization founded in 2020 to provide comprehensive support to victims of romance fraud.",
            displayLink: "advocatingforu.com",
            link: "https://advocatingforu.com/about-us/"
        },
        {
            title: "AARP Fraud Victim Support Group:",
            description: "Peer-to-peer fraud victim support sessions.",
            displayLink: "aarp.org",
            link: "https://www.aarp.org/money/scams-fraud/fraud-victim-support-group/?cmp=RDRCT-CSN-FRD-NEW-SUPPORT_GROUP_PAGE"
        },
        {
            title: "FightCybercrime.org Romance Fraud & Crypto Investment Scam Recovery Groups:",
            description: "The Cybercrime Support Network (CSN) is a national non-profit that provides extensive resources for victims of cybercrime. Their website, FightCybercrime.org, specifically offers valuable information, recovery guides, and access to peer support groups for romance fraud and crypto investment scams. CSN also provides opportunities to volunteer and help others affected by cybercrime.",
            displayLink: "fightcybercrime.org",
            link: "https://fightcybercrime.org/programs/romance-scam-recovery-group/"
        },
        {
            title: "InfraGuard National Members Alliance Cybercrime Support Network (CSN):",
            description: "The CSN offers peer support groups, as well as opportunities to work as volunteers helping other affected individuals recover.",
            displayLink: "infragardnational.org",
            link: "https://www.infragardnational.org/cybercrime-support-network-csn/"
        },
        {
            title: "National Alliance on Mental Illness (NAMI):",
            description: "NAMI provides free, confidential support, education, and advocacy for individuals and families affected by mental illness. They offer a national helpline, peer-led support groups, and educational programs that can help in processing emotional distress and trauma.",
            displayLink: "nami.org",
            link: "https://www.nami.org"
        },
        {
            title: "Local Community Center Support Groups:",
            description: "While smaller in scope than the previously mentioned online support groups, local community centers and government agencies may offer similar opportunities for victims of fraud, including romance fraud. Reach out to your local community center to find out if such programs are offered!"
        }
    ]

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <section className="w-full flex flex-col text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-linear-to-b from-[#7D1538] to-[#E32666] pt-13 md:pt-20">
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
                            Think you or someone you know might be a victim of romance fraud?
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
                            You are <span className="font-bold underline">NOT</span> alone, and help is available.
                        </Typography>
                    </motion.div>
                </div>
            </section>
            <div className="w-full mb-12">
                <Image
                    src={resourcesCurve}
                    alt="resources graphic"
                    className="w-full block"
                    priority
                />
            </div>

            <section className="flex flex-col gap-8 md:gap-16 py-8 md:py-16 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-row w-full border-b-4 border-[#7D1538] pb-8 gap-8 items-center">
                    <ReportIcon
                        sx={{
                            fontSize: {
                                xs: theme.typography.h4.fontSize,
                                sm: theme.typography.h4.fontSize,
                                md: theme.typography.h4.fontSize,
                                lg: theme.typography.h3.fontSize,
                                xl: theme.typography.h3.fontSize,
                            },
                            color: theme.palette.primary.main,
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: theme.palette.primary.main,
                            fontWeight: 'bold'
                        }}
                    >
                        Reporting Romance Fraud
                    </Typography>
                </div>
                {
                    reportItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: theme.palette.primary.main,
                                        fontWeight: "bold"
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <div className="flex flex-col gap-1">
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
                                        {item.description}
                                    </Typography>
                                    {
                                        item.link &&
                                        <Link className="flex flex-row gap-2 cursor-pointer" href={item.link}>
                                            <LinkIcon
                                                sx={{
                                                    fontSize: {
                                                        xs: theme.typography.h5.fontSize,
                                                        sm: theme.typography.h5.fontSize,
                                                        md: theme.typography.h5.fontSize,
                                                        lg: theme.typography.h4.fontSize,
                                                        xl: theme.typography.h4.fontSize,
                                                    },
                                                    color: theme.palette.primary.mauvePink
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        xs: theme.typography.h6.fontSize,
                                                        sm: theme.typography.h6.fontSize,
                                                        md: theme.typography.h6.fontSize,
                                                        lg: theme.typography.h5.fontSize,
                                                        xl: theme.typography.h5.fontSize,
                                                    },
                                                    color: theme.palette.primary.mauvePink,
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {item.displayLink}
                                            </Typography>
                                        </Link>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <section className="flex flex-col gap-8 md:gap-16 py-8 md:py-16 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-row w-full border-b-4 border-[#7D1538] pb-8 gap-8 items-center">
                    <SupportIcon
                        sx={{
                            fontSize: {
                                xs: theme.typography.h4.fontSize,
                                sm: theme.typography.h4.fontSize,
                                md: theme.typography.h4.fontSize,
                                lg: theme.typography.h3.fontSize,
                                xl: theme.typography.h3.fontSize,
                            },
                            color: theme.palette.primary.main,
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: theme.palette.primary.main,
                            fontWeight: 'bold'
                        }}
                    >
                        Emotional Support
                    </Typography>
                </div>
                {
                    supportItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                        color: theme.palette.primary.main,
                                        fontWeight: "bold"
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <div className="flex flex-col gap-1">
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
                                        {item.description}
                                    </Typography>
                                    {
                                        item.link &&
                                        <Link className="flex flex-row gap-2 cursor-pointer" href={item.link}>
                                            <LinkIcon
                                                sx={{
                                                    fontSize: {
                                                        xs: theme.typography.h5.fontSize,
                                                        sm: theme.typography.h5.fontSize,
                                                        md: theme.typography.h5.fontSize,
                                                        lg: theme.typography.h4.fontSize,
                                                        xl: theme.typography.h4.fontSize,
                                                    },
                                                    color: theme.palette.primary.mauvePink
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        xs: theme.typography.h6.fontSize,
                                                        sm: theme.typography.h6.fontSize,
                                                        md: theme.typography.h6.fontSize,
                                                        lg: theme.typography.h5.fontSize,
                                                        xl: theme.typography.h5.fontSize,
                                                    },
                                                    color: theme.palette.primary.mauvePink,
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {item.displayLink}
                                            </Typography>
                                        </Link>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <motion.div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.4 }}
            >
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
                        ← Back
                    </Typography>
                </Link>
                {/* <Link href="/minigame" passHref >
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
                        Next [no link yet, maybe change this text]→
                    </Typography>
                </Link> */}
            </motion.div>
        </div>
    )
}