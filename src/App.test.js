// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeployMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeployMesh/i);
    expect(titleElement).toBeInTheDocument();
});
