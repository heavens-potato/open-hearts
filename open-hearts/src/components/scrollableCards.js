"use client";

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';

export default function scrollableCards() {
    const cardsData = [
        {
            title: "Learn",
            description: "What is romance fraud?",
            link: "/learn",
        },
        {
            title: "Stories",
            description: "Hear real-life accounts from victims of romance fraud.",
            link: "/stories",
        },
        {
            title: "Play",
            description: "Test your skills!",
            link: "/play",
        },
        {
            title: "Resources",
            description: "Where to get help.",
            link: "/resources",
        },
    ]

    return (
        <section className="w-full h-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory py-4 gap-6 md:gap-8 lg:gap-10 justify-start md:justify-center items-stretch pb-6 scrollbar-hide">
                {cardsData.map((card, index) => (
                    <div key={card.title} className="flex-shrink-0 snap-center w-[80%] md:w-80">
                        <Link href={card.link} passHref >
                            <Card
                                component="a" // Render Card as an <a> tag
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between', // Push content to top/bottom, if needed
                                    height: '100%', // Make card fill its flex-shrink-0 wrapper height
                                    cursor: 'pointer',
                                    p: 2, // Internal padding for card content
                                    boxShadow: 3, // MUI shadow
                                    borderRadius: '12px', // Rounded corners
                                    '&:hover': {
                                        boxShadow: 6, // Hover effect
                                        transform: 'translateY(-4px)', // Slight lift effect
                                        transition: 'transform 0.2s ease-in-out',
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 2 }}> {/* flexGrow for content to push bottom elements */}
                                    <Typography variant="h6" component="div" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                {/* Potentially add CardActions or other elements here */}
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}