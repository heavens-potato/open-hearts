"use client";

import Header from "../../components/header.js"
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function minigame() {
    const [data, setData] = useState(null);
    const [strList, setStrList] = useState([]);
    const [currProfile, setProfile] = useState(null);
    const [dialogue, setDialogue] = useState(null);
    const [index, setindex] = useState(0);
    let count = 0;

        const getRandomProfile = async () => {
            // Get a random profile
            const res = await fetch("http://localhost:8080/api/profile");
            const profile = await res.json(); // contains full profile (id, name, dialogue map, etc)
            console.log("Profile: " + JSON.stringify(profile));
            setProfile(profile); // store this in frontend state
            return profile;
        }

        const getDialogue = async (profile) => {
            const randomOption = Math.floor(Math.random() * 3); // Choose a random dialogue option from 0 to 3
            const response = await fetch(`http://localhost:8080/api/dialogue?profileId=${profile.profileId}&option=${"option" + randomOption}`);
            console.log("Profile ID: " + profile.profileId + " Option: " + randomOption);
            const nextDialogue = await response.json();
            console.log("Dialogue:", nextDialogue);
            setDialogue(nextDialogue);
            return nextDialogue;
        }

        const generateRandomProfile = async () => {
            const profile = await getRandomProfile();
            const nextDialogue = await getDialogue(profile);
            setDialogue(nextDialogue);
        }

        const testDataMapping = async () => {
            const dialogue = await getDialogue(currProfile);
            setStrList(prevItems => [...prevItems, dialogue[index]]);
            setindex(index + 1);
        }
        
        const clearMapping = () => {
            setStrList([]);
        }

    return (
        <div>
            <Header />
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2rem', marginRight: '5rem', gap: '1rem'}}>
                    <button style={{cursor: 'pointer'}} onClick={generateRandomProfile}>Generate Profile!</button>
                    <br></br>
                    <button style={{cursor: 'pointer'}} onClick={clearMapping}>Clear Mapping!</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{cursor: 'pointer'}} onClick={testDataMapping}>Test Data Map!</button>
                    <div>
                        {strList.map((text, idx) => (
                            <Typography key={idx}>{text}</Typography>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}