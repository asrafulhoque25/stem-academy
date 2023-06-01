
"use client"
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showButton && window.pageYOffset > 400) {
                setShowButton(true);
            } else if (showButton && window.pageYOffset <= 400) {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollHeight);
        return () => {
            window.removeEventListener("scroll", checkScrollHeight);
        };
    }, [showButton]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-yellow-400 transition-all duration-300 ease-in-out hover:bg-yellow-300 ${
                showButton ? "flex" : "hidden"
            }`}
        >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#071C53" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
        </button>
    );
};

export default ScrollToTop;
