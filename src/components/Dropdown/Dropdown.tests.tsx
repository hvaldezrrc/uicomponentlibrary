import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  test('renders dropdown with options', () => {
    render(<Dropdown options={sampleOptions} placeholder="Select an option" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toBeVisible();

    expect(screen.getByText('Select an option')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(
      <Dropdown
        options={sampleOptions}
        disabled
        placeholder="Disabled dropdown"
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveStyle('cursor: not-allowed');
    expect(selectElement).toHaveStyle('background-color: #f8f9fa');
    expect(selectElement).toHaveStyle('color: #6c757d');
  });

  test('applies custom background color', () => {
    render(
      <Dropdown
        options={sampleOptions}
        backgroundColor="#ff0000"
        placeholder="Custom background"
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('background-color: #ff0000');
  });

  test('handles value selection', () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        options={sampleOptions}
        onChange={handleChange}
        placeholder="Select an option"
      />
    );
    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  test('displays selected value', () => {
    render(
      <Dropdown
        options={sampleOptions}
        value="option2"
        placeholder="Select an option"
      />
    );
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectElement.value).toBe('option2');
  });

  test('has correct default styles', () => {
    render(<Dropdown options={sampleOptions} placeholder="Default dropdown" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('background-color: #ffffff');
    expect(selectElement).toHaveStyle('cursor: pointer');
    expect(selectElement).toHaveStyle('color: #495057');
  });

  test('displays placeholder correctly', () => {
    render(
      <Dropdown options={sampleOptions} placeholder="Custom placeholder" />
    );
    expect(screen.getByText('Custom placeholder')).toBeInTheDocument();
  });
});
