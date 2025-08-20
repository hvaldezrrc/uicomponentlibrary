import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'large':
        return '18px';
      default:
        return '14px';
    }
  }};
  line-height: 1.4;
  display: block;
  margin-bottom: 4px;
  transition: color 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case 'small':
          return '11px';
        case 'large':
          return '16px';
        default:
          return '13px';
      }
    }};
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  size = 'medium',
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      text={text}
      {...props}
    >
      {text}
    </StyledLabel>
  );
};
