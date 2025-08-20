import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px 16px;
  text-align: left;
  border-right: 1px solid #dee2e6;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: #495057;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    display: block;
    border: none;
    border-bottom: 1px solid #dee2e6;

    &:before {
      content: attr(data-label) ': ';
      font-weight: bold;
      display: inline-block;
      width: 100px;
    }
  }
`;

const StyledTableHeaderCell = styled.th<TableCellProps>`
  padding: 12px 16px;
  text-align: left;
  border-right: 1px solid #dee2e6;
  background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  color: #495057;
  font-size: 14px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: opacity 0.2s ease-in-out;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  header = false,
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  const CellComponent = header ? StyledTableHeaderCell : StyledTableCell;

  return (
    <CellComponent
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      header={header}
      {...props}
    >
      {children}
    </CellComponent>
  );
};
