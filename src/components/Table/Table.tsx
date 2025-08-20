import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  border: 1px solid #dee2e6;
  border-radius: 4px;
  overflow: hidden;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledTable
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
      {children}
    </StyledTable>
  );
};
