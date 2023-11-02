import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../app/page';

describe('Home Page', () => {
    let userAgentSetter: jest.SpyInstance;

    beforeEach(() => {
        userAgentSetter = jest.spyOn(window.navigator, 'userAgent', 'get');
    });

    afterEach(() => {
        userAgentSetter.mockRestore();
    });

    it('shows the e-reader site when user agent is an e-reader', () => {
        userAgentSetter.mockReturnValue('Kindle');
        const { getByText } = render(<Home />);
        expect(getByText('E-Reader')).toBeInTheDocument();
    });

    it('shows the no e-reader site when user agent is not an e-reader', () => {
        userAgentSetter.mockReturnValue('Mozilla');
        const { queryByText } = render(<Home />);
        expect(queryByText('E-Reader')).not.toBeInTheDocument();
    });
});