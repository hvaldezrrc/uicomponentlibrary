import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-bottom: 1px solid #dee2e6;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: block;
    border: 1px solid #dee2e6;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledTableRow
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};
