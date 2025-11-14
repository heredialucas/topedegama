"use client";
import { useEffect } from "react";

const ScrollToTopClient = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
};

export default ScrollToTopClient;
