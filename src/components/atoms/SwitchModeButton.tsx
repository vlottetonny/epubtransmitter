import React, { useState } from 'react';

interface SwitchModeButtonProps {
    onToggle: (isToggled: boolean) => void;
}

const SwitchModeButton: React.FC<SwitchModeButtonProps> = ({ onToggle }) => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);
        onToggle(newState);
    };

    return (
        <button
            onClick={handleToggle}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '10px',
            }}
        >
            {isToggled ? 'ON' : 'OFF'}
        </button>
    );
};

export default SwitchModeButton;