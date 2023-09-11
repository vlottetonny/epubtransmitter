import React from "react";
import styles from "../../styles/organisms/Footer.module.css";

export const Footer = () => {
    return (
    <div className="footer" id={styles.footer}>
        <div className="footer__logo">
            <img src="https://placehold.co/100x100" alt="logo" />
        </div>
    </div>
    )
}