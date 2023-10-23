"use client";

import styles from './page.module.css'
import {useEffect, useState} from "react";
import {Button} from "@/components/atoms/Button.atom";
import VerificationCodeComponent from "@/components/molecules/VerificationCodeInput";

export default function Home() {
    const [isEreader, setIsEreader] = useState<boolean>(false); // Hi me, when done please set this to false

    useEffect(() => {
        console.log('Navigator object:', navigator); // Debugging line
        const ua = navigator ? navigator.userAgent : 'Unavailable';
        console.log('User Agent:', ua); // Debugging line
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/Kindle|Nook|Kobo|SonyReader/i.test(userAgent)) {
            setIsEreader(true);
        }
    }, []);
    return (
        <main className={styles.main}>
            {isEreader ? <h1 className={styles.title}>
                    'E-Reader'
                </h1> :
                <div className={styles.not_backgroundImage}>
                    <div className={styles.not_uiContainer}>
                        <text className={styles.not_title}>test</text>
                        <VerificationCodeComponent codeLength={6}/>
                    </div>
                </div>}
        </main>
    )
}
