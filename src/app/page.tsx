"use client";
import Image from 'next/image'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import {Button} from "@/components/atoms/Button.atom";

export default function Home() {
    const [isEreader, setIsEreader] = useState<boolean>(true); // Hi me, when done please set this to false

    useEffect(() => {
        console.log('Navigator object:', navigator); // Debugging line
        const ua = navigator ? navigator.userAgent : 'Unavailable';
        console.log('User Agent:', ua); // Debugging line
        // ... rest of your code
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/Kindle|Nook|Kobo|SonyReader/i.test(userAgent)) {
            setIsEreader(true);
        }
    }, []);
    return (
        <main className={styles.main}>
            <div className={styles.headmast}>
                {isEreader ? <div className={styles.headmast}>
                    <div className={styles.headmast_container}>
                        <h1 className={styles.title}>
                            E-Reader
                        </h1>
                        request a code from api
                    </div>
                </div> : <div className={styles.headmast}>
                    <div className={styles.headmast_container}>
                        <h1 className={styles.title}>
                            Not E-Reader
                        </h1>
                    </div>
                </div>}
            </div>
        </main>
    )
}
