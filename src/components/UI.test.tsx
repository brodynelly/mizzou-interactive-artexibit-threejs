import { fireEvent, render, screen } from '@testing-library/react';
import UI from './UI';

describe('UI Component', () => {
  test('renders header title', () => {
    render(<UI />);
    expect(screen.getByText('WebGL Three.js Project')).toBeInTheDocument();
  });

  test('renders About button', () => {
    render(<UI />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders Source link', () => {
    render(<UI />);
    const link = screen.getByText('Source').closest('a');
    expect(link).toHaveAttribute(
      'href',
      'https://github.com/brodynelly/mizzou-interactive-artexibit-threejs'
    );
  });

  test('opens the About panel', () => {
    render(<UI />);
    fireEvent.click(screen.getByRole('button', { name: 'About' }));
    expect(screen.getByRole('region', { name: 'About this scene' })).toBeInTheDocument();
  });

  test('renders controls instructions', () => {
    render(<UI />);
    expect(screen.getByText('Controls')).toBeInTheDocument();
    expect(screen.getByText(/Click and drag to rotate the camera/i)).toBeInTheDocument();
  });
});
