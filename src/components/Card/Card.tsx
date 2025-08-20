import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;

    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #212529;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

const CardContent = styled.div`
  color: #495057;
  font-size: 14px;
  line-height: 1.5;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CardContentText = styled.p`
  margin: 0;
  color: #495057;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  children,
  width,
  height,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      title={title}
      content={content}
      {...props}
    >
      {title && <CardTitle>{title}</CardTitle>}
      {children ? (
        <CardContent>{children}</CardContent>
      ) : content ? (
        <CardContentText>{content}</CardContentText>
      ) : null}
    </StyledCard>
  );
};
