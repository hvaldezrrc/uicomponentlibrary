import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1;
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '16px 32px';
      default:
        return '12px 24px';
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  background-color: ${(props) => {
    if (props.disabled) return '#cccccc';
    if (props.backgroundColor) return props.backgroundColor;
    switch (props.variant) {
      case 'secondary':
        return '#ffffff';
      case 'danger':
        return '#dc3545';
      default:
        return '#007bff';
    }
  }};
  color: ${(props) => {
    if (props.disabled) return '#666666';
    switch (props.variant) {
      case 'secondary':
        return '#007bff';
      default:
        return '#ffffff';
    }
  }};
  border: ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return '1px solid #007bff';
      default:
        return 'none';
    }
  }};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: ${(props) => {
      switch (props.size) {
        case 'small':
          return '6px 12px';
        case 'large':
          return '12px 24px';
        default:
          return '10px 20px';
      }
    }};
    font-size: ${(props) => {
      switch (props.size) {
        case 'small':
          return '11px';
        case 'large':
          return '15px';
        default:
          return '13px';
      }
    }};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  backgroundColor,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      size={size}
      variant={variant}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      onClick={onClick}
      label={label}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
