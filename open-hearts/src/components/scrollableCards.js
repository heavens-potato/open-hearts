"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme, darken } from "@mui/material/styles";

export default function scrollableCards() {
    const theme = useTheme();

    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < (container.scrollWidth - container.clientWidth - 1));
        }
    }, []);

    const handleArrowClick = useCallback((direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.5;

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    }, []);

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
            link: "/minigame",
        },
        {
            title: "Resources",
            description: "Where to get help.",
            link: "/resources",
        },
        {
            title: "About",
            description: "Learn about our team and mission.",
            link: "/about",
        }
    ]

    return (
        <section className="relative w-full h-full flex flex-row px-6 md:px-8 scrollbar-hide">
            <ChevronLeftIcon
                sx={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '4rem',
                    color: '#44001A',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    zIndex: '5',
                    cursor: 'pointer'
                }}
                onClick={() => handleArrowClick('left')}
                disabled={!canScrollLeft}
            />
            <div ref={scrollContainerRef}
                className="flex overflow-x-scroll snap-x snap-mandatory py-4 gap-6 md:gap-8 lg:gap-10 
                pb-6 items-stretch scrollbar-hide"
            >
                {cardsData.map((card, index) => (
                    <div key={card.title} className="flex-shrink-0 snap-center w-[80%] md:w-80">
                        <Link href={card.link} passHref >
                            <Card
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    cursor: 'pointer',
                                    boxShadow: 3,
                                    borderRadius: '12px',
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-4px)',
                                        transition: 'transform 0.2s ease-in-out',
                                    },
                                    height: '25rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <CardContent sx={{
                                    flexGrow: 1,
                                    p: 2,
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                }}>
                                    <Typography component="div" align="center" sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        fontSize: {
                                            xs: theme.typography.h5.fontSize,
                                            sm: theme.typography.h5.fontSize,
                                            md: theme.typography.h5.fontSize,
                                            lg: theme.typography.h4.fontSize,
                                            xl: theme.typography.h4.fontSize,
                                        },
                                    }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" align="center" sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        fontSize: {
                                            xs: theme.typography.h6.fontSize,
                                            sm: theme.typography.h6.fontSize,
                                            md: theme.typography.h6.fontSize,
                                            lg: theme.typography.h5.fontSize,
                                            xl: theme.typography.h5.fontSize,
                                        },
                                    }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
            <ChevronRightIcon
                sx={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '4rem',
                    color: '#44001A',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    zIndex: '5',
                    cursor: 'pointer'
                }}
                onClick={() => handleArrowClick('right')}
                disabled={!canScrollRight}
            />
        </section>
    )
}