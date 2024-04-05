"use client"
import React from "react";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function CookiesConsent() {

    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    },[]);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if(showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-[#9db3c1] bg-opacity-40 z-50">
            <div className="fixed bottom-0 left-00 flex items-center w-screen justify-center justify-between bg-[#cbb19b] px-4 pr-8 py-8">
                <span className="text-dark text-base text-white mr-16">
                    This website uses cookies to improve user experience. By using our website you consent to all the Terms of Usage in accordance with our Private Policy 
                </span>
                <button className="bg-[#0c343d] py-2 px-10 rounded text-white" onClick={() => acceptCookie()}>
                    Accept
                </button>
            </div>
        </div>
    )
}
