import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bookstore', () => {
    render(<App />);
    const linkElement = screen.getByText(/bookstore/i);
    expect(linkElement).toBeInTheDocument();
});
