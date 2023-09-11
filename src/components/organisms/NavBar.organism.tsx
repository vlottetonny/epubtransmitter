"use client";
import React, {useState} from "react";
import styles from "../../styles/organisms/NavBar.module.css";
import Link from "next/link";

export const NavBar = () => {
    // State
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // Fn - handle click
    const handleClick = (id: string) => {
        // Get element
        const el = document.getElementById(id);

        // If element exists
        if (el) {
            // Scroll to element
            el.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div id={styles.navBar}>
            <div id={styles.logowrap}>
                <img src="https://placehold.co/100x100" alt="logo" />
            </div>
            <div id={styles.linkcontainer}>
                <div className={styles.link} onClick={() => handleClick("about")}>
                    <Link href="/about">About</Link>
                </div>
                <div className={styles.link} onClick={() => handleClick("projects")}>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className={styles.link} onClick={() => handleClick("contact")}>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

        </div>
    )
};