import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bookstore', () => {
    render(<App />);
    const linkElement = screen.getAllByText(/bookstore/i)[0];
    expect(linkElement).toBeInTheDocument();
});
