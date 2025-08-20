import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.width &&
    `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};`}
  ${(props) =>
    props.height &&
    `height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};`}

  &:hover:not(:disabled) {
    transform: scale(1.02);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      {...props}
    />
  );
};
