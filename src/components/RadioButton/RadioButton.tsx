import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
`;

const CustomRadio = styled.div<{ checked: boolean; disabled: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) => {
      if (props.disabled) return '#ced4da';
      if (props.checked) return '#007bff';
      return '#ced4da';
    }};
  border-radius: 50%;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${(props) => {
      if (props.disabled && props.checked) return '#6c757d';
      if (props.checked) return '#007bff';
      return 'transparent';
    }};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 10px;

    &::after {
      width: 8px;
      height: 8px;
    }
  }
`;

const RadioLabel = styled.span<{ disabled: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#6c757d' : '#495057')};
  line-height: 1.4;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked = false,
  disabled = false,
  backgroundColor,
  className,
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && event.target.checked) {
      onChange(value);
    }
  };

  return (
    <RadioContainer
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      name={name}
      value={value}
      label={label}
      checked={checked}
      {...props}
    >
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CustomRadio checked={checked} disabled={disabled} />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </RadioContainer>
  );
};
