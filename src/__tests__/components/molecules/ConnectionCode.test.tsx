import { render, screen } from '@testing-library/react';
import axios from 'axios';
import ConnectionCode from '../../../components/molecules/ConnectionCode';

jest.mock('axios');

describe('ConnectionCode Component', () => {
    it('displays the code', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: '123456' });
        render(<ConnectionCode />);
        expect(await screen.findByText('Code: 123456')).toBeInTheDocument();
    });
});
