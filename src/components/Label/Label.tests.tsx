import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders label with text', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('applies disabled styles when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText('Disabled Label');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(labelElement).toHaveStyle('color: #999999');
  });

  test('applies custom background color', () => {
    render(<Label text="Custom Label" backgroundColor="#ff0000" />);
    const labelElement = screen.getByText('Custom Label');
    expect(labelElement).toHaveStyle('background-color: #ff0000');
  });

  test('applies correct size styles', () => {
    const { rerender } = render(<Label text="Small Label" size="small" />);
    let labelElement = screen.getByText('Small Label');
    expect(labelElement).toHaveStyle('font-size: 12px');

    rerender(<Label text="Large Label" size="large" />);
    labelElement = screen.getByText('Large Label');
    expect(labelElement).toHaveStyle('font-size: 18px');

    rerender(<Label text="Medium Label" size="medium" />);
    labelElement = screen.getByText('Medium Label');
    expect(labelElement).toHaveStyle('font-size: 14px');
  });

  test('applies htmlFor attribute correctly', () => {
    render(<Label text="Email Label" htmlFor="email-input" />);
    const labelElement = screen.getByText('Email Label');
    expect(labelElement).toHaveAttribute('for', 'email-input');
  });

  test('has correct default styles', () => {
    render(<Label text="Default Label" />);
    const labelElement = screen.getByText('Default Label');
    expect(labelElement).toHaveStyle('color: #333333');
    expect(labelElement).toHaveStyle('cursor: default');
    expect(labelElement).toHaveStyle('background-color: transparent');
  });
});
