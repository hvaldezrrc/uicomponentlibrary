import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  border-top: 2px solid #dee2e6;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease-in-out;

  td {
    padding: 12px 16px;
    text-align: left;
    color: #495057;
    font-size: 14px;
    border-right: 1px solid #dee2e6;

    &:last-child {
      border-right: none;
    }

    @media (max-width: 768px) {
      padding: 8px 12px;
      font-size: 12px;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <StyledTableFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
      {children}
    </StyledTableFooter>
  );
};
