import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: ${(props) => {
    if (props.disabled) return '#999999';
    if (props.color) return props.color;
    return '#333333';
  }};
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
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'light':
        return '300';
      case 'bold':
        return '700';
      default:
        return '400';
    }
  }};
  line-height: 1.5;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
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

export const Text: React.FC<TextProps> = ({
  content,
  size = 'medium',
  weight = 'normal',
  color,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      content={content}
      {...props}
    >
      {content}
    </StyledText>
  );
};
