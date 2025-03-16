"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'

function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    const onThemeToggle = useCallback(() => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light");
        }
    }, [theme])

    if (!mounted) {
        return null;
    }

    return (
        <button onClick={onThemeToggle} className="toggle-theme-button">
            <Image src={`${theme === 'light' ? '/light_mode.svg' : '/dark_mode_30.svg'}`} alt="toggle theme" width={30} height={30} className="icon-image" />
        </button>
    )
}

export default ThemeToggle