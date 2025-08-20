import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface StyledSelectProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: ${(props) => {
    if (props.disabled) return '#f8f9fa';
    if (props.backgroundColor) return props.backgroundColor;
    return '#ffffff';
  }};
  color: ${(props) => (props.disabled ? '#6c757d' : '#495057')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:hover:not(:disabled) {
    border-color: #adb5bd;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    padding-right: 36px;
  }
`;

const StyledOption = styled.option`
  background-color: #ffffff;
  color: #495057;
  padding: 8px 12px;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  value,
  disabled = false,
  backgroundColor,
  className,
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <StyledSelect
      value={value || ''}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      onChange={handleChange}
    >
      <StyledOption value="" disabled>
        {placeholder}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
