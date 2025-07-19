"use client";

import Header from "../../components/header.js"
import { useEffect, useState } from "react";
import axios from "axios";

export default function minigame() {
    const [data, setData] = useState(null);
    // useEffect(() =>{
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

        const testSendTwo = async () => {
            try{
                const response = await axios.post("http://localhost:8080/api/testTwo",
                {
                    name: "Michael Carter",
                    scammer: false,
                    messageOne: "Looking forward to meeting you!"
                })
                const result = response.data;
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
            <button style={{cursor: 'pointer'}} onClick={fetchData}>Test!</button>
            <br></br>
            <button style={{cursor: 'pointer'}} onClick={testSendOne}>Test Post!</button>
            <br></br>
            <button style={{cursor: 'pointer'}} onClick={testSendTwo}>Test Profile!</button>
        </div>
    )
}