import axios from 'axios';
import React, { useState, useEffect } from "react";

const ConnectionCode: React.FC = () => {
    const [code, setCode] = useState<string | null>(null);

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const response = await axios.get('http://localhost:8000/code/get');
                setCode(response.data);
            } catch (error) {
                console.error('Error fetching the code:', error);
            }
        };

        fetchCode();
    }, []);

    return (
        <div>
            <h1>ConnectionCode</h1>
            {code && <p>Code: {code}</p>}
        </div>
    );
}

export default ConnectionCode;