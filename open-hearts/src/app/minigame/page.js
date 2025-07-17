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

        const testSend = async () => {
            try{
                const response = await axios.post("http://localhost:8080/api/test", 
                {
                    data: 'John',
                })
                // const result = await response.text();
                console.log(response.data);
            } catch (error) {
                console.error("Error Fetching data:", error);
            }
        };
        // fetchData()
    // })

    return (
        <div>
            <Header />
            <button style={{cursor: 'pointer'}} onClick={fetchData}>Test!</button>
            <br></br>
            <button style={{cursor: 'pointer'}} onClick={testSend}>Test Post!</button>
        </div>
    )
}