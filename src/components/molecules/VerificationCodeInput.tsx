import React, { useState, ChangeEvent, FC, useEffect } from 'react';
import styles from "../../styles/molecules/VerificationCodeInput.module.css";

interface VerificationCodeProps {
    codeLength: number;
}

const VerificationCodeComponent: FC<VerificationCodeProps> = ({ codeLength}) => {
    const [inputStates, setInputStates] = useState<Array<{ digit: string; setDigit: React.Dispatch<React.SetStateAction<string>> }>>([]);

    useEffect(() => {
        const states = [];
        for (let i = 0; i < codeLength; i++) {
            const [digit, setDigit] = useState("");
            states.push({ digit, setDigit });
        }
        setInputStates(states);
    }, [codeLength]);

    const [code, setCode] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {

        let entry = e.target.value;
        if (entry.length <= 1 && !Number.isNaN(Number(entry))) {
            inputStates[index].setDigit(entry);
            if (entry.length === 1) {
                if (index < codeLength - 1) {
                    let nextInput = document.querySelectorAll<HTMLInputElement>("styles.verification-input")[index + 1];
                    if (nextInput.value === "") nextInput.focus();
                }
            } else if (entry.length === 0) {
                let prevInput = document.querySelectorAll<HTMLInputElement>(`styles.verification-input`)[index - 1];
                if (prevInput !== undefined) prevInput.focus();
            }
        } else return;
    };

    return (
        <div className="styles.verification-code-container">
            {inputStates.map((state, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="styles.verification-input"
                    value={state.digit}
                    onChange={(e) => handleChange(e, index)}
                />
            ))}
        </div>
    );
};

export default VerificationCodeComponent;