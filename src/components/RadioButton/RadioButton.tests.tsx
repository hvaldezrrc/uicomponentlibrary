import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(<RadioButton name="test" value="option1" label="Test Option" />);
    const radioElement = screen.getByRole('radio');
    const labelElement = screen.getByText('Test Option');

    expect(radioElement).toBeInTheDocument();
    expect(radioElement).toBeVisible();
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('applies disabled styles when disabled', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Disabled Option"
        disabled
      />
    );
    const radioElement = screen.getByRole('radio');
    const containerElement = radioElement.closest('label');

    expect(radioElement).toBeDisabled();
    expect(containerElement).toHaveStyle('cursor: not-allowed');
    expect(containerElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Custom Option"
        backgroundColor="#ff0000"
      />
    );
    const radioElement = screen.getByRole('radio');
    const containerElement = radioElement.closest('label');

    expect(containerElement).toHaveStyle('background-color: #ff0000');
  });

  test('handles checked state correctly', () => {
    render(
      <RadioButton name="test" value="option1" label="Checked Option" checked />
    );
    const radioElement = screen.getByRole('radio') as HTMLInputElement;

    expect(radioElement.checked).toBe(true);
  });

  test('handles change events', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Test Option"
        onChange={handleChange}
      />
    );
    const radioElement = screen.getByRole('radio');

    fireEvent.click(radioElement);
    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  test('has correct default styles', () => {
    render(<RadioButton name="test" value="option1" label="Default Option" />);
    const radioElement = screen.getByRole('radio');
    const containerElement = radioElement.closest('label');

    expect(containerElement).toHaveStyle('background-color: transparent');
    expect(containerElement).toHaveStyle('cursor: pointer');
    expect(containerElement).toHaveStyle('opacity: 1');
  });

  test('applies correct name and value attributes', () => {
    render(<RadioButton name="size" value="large" label="Large Size" />);
    const radioElement = screen.getByRole('radio') as HTMLInputElement;

    expect(radioElement.name).toBe('size');
    expect(radioElement.value).toBe('large');
  });

  test('does not trigger onChange when disabled', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton
        name="test"
        value="option1"
        label="Disabled Option"
        disabled
        onChange={handleChange}
      />
    );
    const radioElement = screen.getByRole('radio');

    fireEvent.click(radioElement);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
