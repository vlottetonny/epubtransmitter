import React from "react";
import styles from "../../styles/atoms/Button.module.css";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className={styles.wrapper} onClick={onClick}>
            {children}
        </button>
    )
}