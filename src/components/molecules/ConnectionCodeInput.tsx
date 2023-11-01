import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import styles from "../../styles/molecules/VerificationCodeInput.module.css";

interface InputCodeProps {
    length: number;
    label: string;
    loading: boolean;
    onComplete: (code: string) => void;
}

const InputCode: React.FC<InputCodeProps> = ({ length, label, loading, onComplete }) => {
    const [code, setCode] = useState<string[]>(Array.from({ length }, () => ""));
    const inputs = useRef<(HTMLInputElement | null)[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);



    const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
        const value = e.target.value.toUpperCase();
        const newCode = [...code];
        newCode[slot] = value;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs.current[slot + 1]?.focus();
        }
        if (newCode.every(char => char !== "")) {
            handleSubmit(newCode.join(""));
        }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, slot: number) => {
        if (e.key === 'Backspace' && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1]?.focus();
        }
    };

    const handleSubmit = async (code: string) => {
        try {
            console.log('Sending code:', code);
            const response = await axios.post('http://localhost:8080/code/connect', { code });
            if (response.status === 200) {
                console.log('Code verified successfully');
                onComplete(code); // Send the code to the parent component
                setError(null); // Clear any previous error
                setSuccess('Connected!'); // Set the success message
                // No need to clear the input fields or set focus
            } else {
                console.log('Code verification failed');
                setError('The code could not be found. Please try again.');
                setCode(Array.from({ length }, () => "")); // Clear the inputs
                inputs.current[0]?.focus(); // Focus on the first input box
            }
        } catch (error) {
            console.error('Error sending code to server:', error);
            setError('An error occurred while verifying the code. Please try again.');
            setCode(Array.from({ length }, () => "")); // Clear the inputs
            inputs.current[0]?.focus(); // Focus on the first input box
        }
    };

    return (
        <div className={styles.codeInput}>
            <label className={styles.codeLabel}>{label}</label>
            <div className={`${styles.codeInputs} ${success ? styles.codeInputsSuccess : ''}`}>
                {code.map((num, idx) => (
                    <input
                        key={idx}
                        type="text"
                        inputMode="text"
                        maxLength={1}
                        value={num}
                        autoFocus={!code[0].length && idx === 0}
                        readOnly={loading}
                        onChange={e => processInput(e, idx)}
                        onKeyUp={e => onKeyUp(e, idx)}
                        ref={ref => {
                            if (ref) inputs.current[idx] = ref;
                        }}
                    />
                ))}
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
    );
};

export default InputCode;
