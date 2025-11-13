'use client';

import { useState, useEffect } from 'react';
import { SnowParticles } from './snow-particles';

export const SnowParticlesWrapper = () => {
    const [mounted, setMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Only show particles after mounting to avoid hydration mismatch
    useEffect(() => {
        // Delay mounting to ensure client-side only rendering
        const timeout = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timeout);

        // Check for dark mode using CSS
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
        };

        // Check initially
        checkDarkMode();

        // Set up a mutation observer to watch for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    // Return null on server and initial client render to prevent hydration mismatch
    if (!mounted) return <div suppressHydrationWarning />;

    return <SnowParticles isDarkMode={isDarkMode} count={70} />;
}; 