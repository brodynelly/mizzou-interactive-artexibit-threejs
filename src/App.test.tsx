import { render, screen } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

// Mock ThreeScene because it uses WebGL which is not available in jsdom
vi.mock('./components/ThreeScene', () => ({
  default: () => <div data-testid="three-scene">ThreeScene Mock</div>,
}));

describe('App Component', () => {
  test('renders ThreeScene and UI', () => {
    render(<App />);
    expect(screen.getByTestId('three-scene')).toBeInTheDocument();
    expect(screen.getByText('WebGL Three.js Project')).toBeInTheDocument();
  });
});
