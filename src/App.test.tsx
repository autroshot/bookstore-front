import { render, screen } from '@testing-library/react';
import App from './app';

test('renders bookstore', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/bookstore/i)[0];
    expect(linkElement).toBeInTheDocument();
});
