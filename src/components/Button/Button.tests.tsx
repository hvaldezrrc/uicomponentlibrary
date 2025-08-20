import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByRole('button', { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('applies disabled styles when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByRole('button', {
      name: /disabled button/i,
    });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
    expect(buttonElement).toHaveStyle('color: #666666');
  });

  test('applies custom background color', () => {
    render(<Button label="Custom Button" backgroundColor="#ff0000" />);
    const buttonElement = screen.getByRole('button', {
      name: /custom button/i,
    });
    expect(buttonElement).toHaveStyle('background-color: #ff0000');
  });

  test('applies correct size styles', () => {
    const { rerender } = render(<Button label="Small Button" size="small" />);
    let buttonElement = screen.getByRole('button', { name: /small button/i });
    expect(buttonElement).toHaveStyle('padding: 8px 16px');
    expect(buttonElement).toHaveStyle('font-size: 12px');

    rerender(<Button label="Large Button" size="large" />);
    buttonElement = screen.getByRole('button', { name: /large button/i });
    expect(buttonElement).toHaveStyle('padding: 16px 32px');
    expect(buttonElement).toHaveStyle('font-size: 16px');
  });

  test('applies correct variant styles', () => {
    const { rerender } = render(
      <Button label="Primary Button" variant="primary" />
    );
    let buttonElement = screen.getByRole('button', { name: /primary button/i });
    expect(buttonElement).toHaveStyle('background-color: #007bff');
    expect(buttonElement).toHaveStyle('color: #ffffff');

    rerender(<Button label="Secondary Button" variant="secondary" />);
    buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveStyle('background-color: #ffffff');
    expect(buttonElement).toHaveStyle('color: #007bff');
    expect(buttonElement).toHaveStyle('border: 1px solid #007bff');

    rerender(<Button label="Danger Button" variant="danger" />);
    buttonElement = screen.getByRole('button', { name: /danger button/i });
    expect(buttonElement).toHaveStyle('background-color: #dc3545');
    expect(buttonElement).toHaveStyle('color: #ffffff');
  });
});
