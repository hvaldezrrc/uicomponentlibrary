import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders text with content', () => {
    render(<Text content="Test text content" />);
    const textElement = screen.getByText('Test text content');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test('applies disabled styles when disabled', () => {
    render(<Text content="Disabled text" disabled />);
    const textElement = screen.getByText('Disabled text');
    expect(textElement).toHaveStyle('cursor: not-allowed');
    expect(textElement).toHaveStyle('color: #999999');
  });

  test('applies custom color', () => {
    render(<Text content="Custom color text" color="#ff0000" />);
    const textElement = screen.getByText('Custom color text');
    expect(textElement).toHaveStyle('color: #ff0000');
  });

  test('applies custom background color', () => {
    render(<Text content="Custom background text" backgroundColor="#f0f0f0" />);
    const textElement = screen.getByText('Custom background text');
    expect(textElement).toHaveStyle('background-color: #f0f0f0');
  });

  test('applies correct size styles', () => {
    const { rerender } = render(<Text content="Small text" size="small" />);
    let textElement = screen.getByText('Small text');
    expect(textElement).toHaveStyle('font-size: 12px');

    rerender(<Text content="Large text" size="large" />);
    textElement = screen.getByText('Large text');
    expect(textElement).toHaveStyle('font-size: 18px');

    rerender(<Text content="Medium text" size="medium" />);
    textElement = screen.getByText('Medium text');
    expect(textElement).toHaveStyle('font-size: 14px');
  });

  test('applies correct weight styles', () => {
    const { rerender } = render(<Text content="Light text" weight="light" />);
    let textElement = screen.getByText('Light text');
    expect(textElement).toHaveStyle('font-weight: 300');

    rerender(<Text content="Bold text" weight="bold" />);
    textElement = screen.getByText('Bold text');
    expect(textElement).toHaveStyle('font-weight: 700');

    rerender(<Text content="Normal text" weight="normal" />);
    textElement = screen.getByText('Normal text');
    expect(textElement).toHaveStyle('font-weight: 400');
  });

  test('has correct default styles', () => {
    render(<Text content="Default text" />);
    const textElement = screen.getByText('Default text');
    expect(textElement).toHaveStyle('color: #333333');
    expect(textElement).toHaveStyle('cursor: default');
    expect(textElement).toHaveStyle('background-color: transparent');
    expect(textElement).toHaveStyle('font-size: 14px');
    expect(textElement).toHaveStyle('font-weight: 400');
  });
});
