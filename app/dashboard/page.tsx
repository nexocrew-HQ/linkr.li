"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "../../backend/actions";
import { AUTHURL } from "../../config.json";



export default function Home() {


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            const isAuthenticated = await getCookie();
            if (isAuthenticated) {
                setIsAuthenticated(true);
            } else {
                window.location.href = AUTHURL;
            }
        }
        checkAuth();
    })




    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
}
