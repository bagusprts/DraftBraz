// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftBraz title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftBraz/i);
    expect(titleElement).toBeInTheDocument();
});
