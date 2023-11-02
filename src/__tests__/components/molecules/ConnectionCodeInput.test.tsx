import { render, fireEvent, screen } from '@testing-library/react';
import InputCode from '../../../components/molecules/ConnectionCodeInput';
import axios from 'axios';

jest.mock('axios');

describe('InputCode Component', () => {
    it('processes input correctly', async () => {
        (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

        const onCompleteMock = jest.fn();
        render(<InputCode length={6} label="Verification Code" loading={false} onComplete={onCompleteMock} />);
        const inputElements = screen.getAllByRole('textbox');
        for (let i = 0; i < inputElements.length; i++) {
            fireEvent.change(inputElements[i], { target: { value: (i + 1).toString() } });
            if (i !== inputElements.length - 1) {
                fireEvent.blur(inputElements[i]);  // trigger onBlur to simulate moving to the next input
            }
        }
        await new Promise(r => setTimeout(r, 0));  // Add a small delay to allow async actions to complete
        expect(onCompleteMock).toHaveBeenCalledWith('123456');
    });
});

