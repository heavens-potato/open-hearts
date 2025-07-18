"use client";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Header from "../../../components/header.js";

export default function typicalCase() {
    const theme = useTheme();

    return (
        <div className="w-full min-h-screen">
            <Header />

            <section className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <h1>Typical Case!!!!!</h1>
            </section>
        </div>
    )
}