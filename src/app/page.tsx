"use client";
import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import InputCode from "@/components/molecules/ConnectionCodeInput";
import SwitchModeButton from "@/components/atoms/SwitchModeButton";
import ConnectionCode from "@/components/molecules/ConnectionCode";
import FileUpload from "@/components/organisms/FileUpload";

export default function Home() {
    const [isEreader, setIsEreader] = useState(false);
    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);
    const [connectionCode, setConnectionCode] = useState("");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        if (/Kindle|Nook|Kobo|SonyReader/i.test(userAgent)) {
            setIsEreader(true);
        }
    }, []);

    const handleToggle = () => {
        setIsEreader(!isEreader);
    };

    const handleFileUpload = (file: File) => {
        console.log('Uploaded file:', file);
      };

    return (
        <main className={styles.main}>
            <SwitchModeButton onToggle={handleToggle}/>
            {isEreader ? (
                <div className={styles.uiContainer}>
                    <h1 className={styles.title}>E-Reader </h1>
                    <ConnectionCode/>
                </div>
            ) : (
                <div className={styles.not_backgroundImage}>
                    <div className={styles.not_uiContainer}>
                        <div className={styles.not_connectionContainer}>
                            <InputCode
                                length={6}
                                label="Connection code"
                                loading={loading}
                                onComplete={(code) => {
                                    setLoading(true);
                                    setTimeout(() => setLoading(false), 10000);
                                    setConnected(true);
                                    setConnectionCode(code);
                                }}
                            />
                            <p className={styles.not_connectionExplanationText}>
                                {connected ? (
                                    <React.Fragment>
                                        You are now connected to your e-reader. Now upload an epub file in the box below to send it to your e-reader.
                                        <FileUpload onFileUpload={handleFileUpload} connectionCode={connectionCode}/>
                                    </React.Fragment>
                                ) : (
                                    "Open this website on your e-reader and enter the code that is being displayed in the input fields above."
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
