"use client";
import Header from "../../components/header.js";
import { useTheme } from "@mui/material/styles";
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import aboutCurve from "../../components/images/about-curve.svg";
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function About() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <motion.div
                className="w-full bg-gradient-to-b from-[#A30B37] to-[#C63F40] py-32 px-16 items-center justify-center text-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.0 }}
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
                        The Open Hearts Story
                    </Typography>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: "easeInOut" }}
            >
                <Image
                    src={aboutCurve}
                    alt="about page graphic"
                    className="w-full display-block"
                    priority
                />
            </motion.div>


            <div className="flex flex-col gap-8 md:gap-16 pt-13 md:pt-23 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.5 }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        Our Origin
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
                        I first came across romance fraud during the fall semester of my sophomore year in a class about various types of frauds and scams along with detecting and preventing them.
                        While the topic was new to me, romance fraud immediately captured my attention for its uniquely sinister methods.
                        Unlike other financial crimes, it weaponized the deepest of human emotions&mdash;love&mdash;to manipulate its victims.
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
                        That&apos;s when I realized the problem wasn&apos;t just the prevalence of these scams but the profound lack of public awareness surrounding them.
                        Romance fraud was a topic that was entirely new to me and conversations with my peers revealed a similar level of unfamiliarity.
                        While some online resources on the topic existed, they were often presented in a static, brochure-style format.
                        I wanted to create an engaging and visually appealing educational experience that divides the information into a clear, sequential flow.
                    </Typography>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.5 }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        Why &quot;Open Hearts&quot;?
                    </Typography>

                    <div className="flex flex-col gap-1 md:gap-2">
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
                            The name Open Hearts carries a dual meaning:
                        </Typography>


                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                <ListItemText>
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
                                        For the victims, it honors the immense courage of victims who have opened their hearts to share their painful stories.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                <ListItemText>
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
                                        For the community, it is a call for our community to open its heart and offer support and empathy rather than judgement.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 2.0 }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        The Experience
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
                        The design of Open Hearts is a direct extension of this mission.
                        We use a palette of warm, inviting colors and soft, rounded corners to create a safe, non-intimidating space.
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
                        Our mission is simple: to turn vulnerability into a shared strength.
                        By providing critical education and then simulating fradulent interactions in a safe environment, we aim to equip our community with the emotional and digital literacy needed to protect themselves and their loved ones.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 2.5 }}
                >
                    <hr className="border-2 border-[#7D1538]" />
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 3.0 }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        The Team
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
                        While this project began as a personal initiative during my sophomore year, it reached its full potential through the support of a dedicated team of collaborators:
                    </Typography>

                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Stephen Wu - Project Manager and Lead Software Engineer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Justin Glazer - Backend Engineer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Rachel Kim - Backend Engineer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Claire Chen - Frontend Engineer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Alexis Giobbi - UI/UX Designer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Tracy Tan - UI/UX Designer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <ListItemText>
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
                                    Jennifer Vo - UI/UX Designer
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 3.5 }}
                >
                    <hr className="border-2 border-[#7D1538]" />
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 4.0 }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h5.fontSize,
                                sm: theme.typography.h5.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                                xl: theme.typography.h4.fontSize,
                            },
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >
                        References
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Aborisade, Richard Abayomi, et al. &ldquo;Emotional and Financial Costs of Online Dating Scam: A Phenomenological Narrative of the Experiences of Victims of Nigerian Romance Fraudsters.&rdquo; <em>Journal of Economic Criminology</em>, vol. 3, 9 Dec. 2023, p. 100044, www.sciencedirect.com/science/article/pii/S2949791423000441, https://doi.org/10.1016/j.jeconc.2023.100044.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Bilz, Alexander, et al. &ldquo;Tainted Love: A Systematic Literature Review of Online Romance Scam Research.&rdquo; <em>Interacting with Computers</em>, vol. 35, no. 6, 27 Oct. 2023, https://doi.org/10.1093/iwc/iwad048.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Carter, Elisabeth. &ldquo;Distort, Extort, Deceive and Exploit: Exploring the Inner Workings of a Romance Fraud.&rdquo; <em>The British Journal of Criminology</em>, vol. 61, no. 2, 7 Nov. 2020, https://doi.org/10.1093/bjc/azaa072.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Cernik, Lizzie. &ldquo;&ldquo;It Felt like Losing a Husband&rdquo;: The Fraudsters Breaking Hearts – and Emptying Bank Accounts.&rdquo; <em>The Guardian</em>, 10 Jan. 2022, www.theguardian.com/lifeandstyle/2022/jan/10/it-felt-like-losing-a-husband-the-fraudsters-breaking-hearts-and-emptying-bank-accounts.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Coluccia, Anna, et al. &ldquo;Online Romance Scams: Relational Dynamics and Psychological Characteristics of the Victims and Scammers. A Scoping Review.&rdquo; <em>Clinical Practice & Epidemiology in Mental Health</em>, vol. 16, no. 1, 20 Apr. 2020, pp. 24-35, www.ncbi.nlm.nih.gov/pmc/articles/PMC7254823/, https://doi.org/10.2174/1745017902016010024.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Cross, Cassandra. &ldquo;&ldquo;I Knew It Was a Scam&rdquo;: Understanding the Triggers for Recognizing Romance Fraud.&rdquo; <em>Criminology & Public Policy</em>, vol. 22, no. 4, 6 Oct. 2023, https://doi.org/10.1111/1745-9133.12645.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Federal Trade Commission. &ldquo;What to Know about Romance Scams.&rdquo; <em>Federal Trade Commission Consumer Advice</em>, Federal Trade Commission, Aug. 2022, consumer.ftc.gov/articles/what-know-about-romance-scams.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Gauci, Christine. &ldquo;Romance Fraud : Its Repercussions on Victims&apos; Wellbeing.&rdquo; <em>Www.um.edu.mt</em>, 2023, www.um.edu.mt/library/oar/handle/123456789/118566.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Khukhunaishvili, Dina. <em>Romance Scam as One of the Main Challenges of Cybercrime</em>. 2023, www.researchgate.net/profile/Dina-Khukhunaishvili-4/publication/385417713_Romance_Scam_as_one_of_the_main_Challenges_of_cybercrime/links/6723cd3d77f274616d5421c8/Romance-Scam-as-one-of-the-main-Challenges-of-cybercrime.pdf.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Thumboo, Sharen, and Sudeshna Mukherjee. &ldquo;Digital Romance Fraud Targeting Unmarried Women.&rdquo; <em>Discover Global Society</em>, vol. 2, no. 1, 10 Dec. 2024, https://doi.org/10.1007/s44282-024-00132-x.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        U.S. Attorney's Office, Southern District of West Virginia. &rdquo;Romance Fraud Awareness: A Great Gift for Valentine&apos;s Day (or Any Day).&ldquo; <em>Justice.gov</em>, U.S. Attorney&apos;s Office, Southern District of West Virginia, 13 Feb. 2023, www.justice.gov/usao-sdwv/pr/romance-fraud-awareness-great-gift-valentine-s-day-or-any-day.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Whitty, Monica T. &rdquo;The Scammers Persuasive Techniques Model: Development of a Stage Model to Explain the Online Dating Romance Scam.&ldquo; <em>British Journal of Criminology</em>, vol. 53, no. 4, 4 Apr. 2013, pp. 665–684, www.cl.cam.ac.uk/~rja14/shb17/whitty.pdf, https://doi.org/10.1093/bjc/azt009.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Whitty, Monica T., and Tom Buchanan. &rdquo;The Online Romance Scam: A Serious Cybercrime.&ldquo; <em>Cyberpsychology, Behavior, and Social Networking</em>, vol. 15, no. 3, Mar. 2012, pp. 181–183, pubmed.ncbi.nlm.nih.gov/22304401/, https://doi.org/10.1089/cyber.2011.0352.
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
                            paddingLeft: "3rem",
                            textIndent: "-3rem",
                            lineHeight: 2,
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                        }}
                    >
                        Yosiandra, Syakira Yuniar, and Dewi Saraswati Sakariah. &rdquo;Unveiling the Romance Scam Scheme: Psychological Manipulation and Its Impact on Victims.&ldquo; <em>HUMANIKA</em>, vol. 31, no. 2, 10 Dec. 2024, pp. 185–199, https://doi.org/10.14710/humanika.v31i2.67604.
                    </Typography>
                </motion.div>
            </div>

            <div
                className="w-full flex justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-13 md:pb-18 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.0, delay: 5.0 }}
            >
                <Link href="/resources" passHref >
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
                        ← Back to Resources
                    </Typography>
                </Link>
            </div>
        </div >
    )
}