"use client";

import Header from "../../components/header.js"
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function minigame() {
    const [data, setData] = useState(null);
    const [strList, setStrList] = useState([]);
    const tempStringOptions = ['Test_String_1', 'Test_String_2', 'Test_String_3'];
    let count = 0;
    // useEffect(() =>{
        const testDataMapping = () => {
            const randInd = Math.floor(Math.random()*3); //random string test from array. REPLACE
            const curr = tempStringOptions[randInd]; //random string test from array. REPLACE
            setStrList(prevItems => [...prevItems, curr]);
        }
        
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/hello")
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error("Error Fetching data:", error);
            }
        };

        const testSendOne = async () => {
            try{
                const response = await axios.post("http://localhost:8080/api/testOne", 
                {
                    data: "One for da Win",
                })
                // const result = await response.text();
                const obj = response.data;
                console.log(obj.data);
            } catch (error) {
                console.error("Error Fetching data:", error);
            }
        };

        const profileTest = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/profile?option=1")
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error("Error Fetching data:", error);
            }
        }
        // fetchData()
    // })

    return (
        <div>
            <Header />
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'row', marginRight: '5rem'}}>
                    <button style={{cursor: 'pointer'}} onClick={fetchData}>Test!</button>
                    <br></br>
                    <button style={{cursor: 'pointer'}} onClick={testSendOne}>Test Post!</button>
                    <br></br>
                    <button style={{cursor: 'pointer'}} onClick={profileTest}>Test Profile!</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{cursor: 'pointer'}} onClick={testDataMapping}>Test Data Map!</button>
                    <div>
                        {strList.map((text) => (
                            <Typography key={count++}>{text}</Typography>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}