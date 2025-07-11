"use client";

import Header from "../../components/header.js"
import { useEffect, useState } from "react";

export default function minigame() {
    const [data, setData] = useState(null);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8000/api")
                const result = await response.text()
                console.log(result)
            } catch (error) {
                console.error("Error Fetching data:", error)
            }
        }
        fetchData()
    })

    return (
        <div>
            <Header />
        </div>
    )
}