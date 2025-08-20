import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';

describe('TableCell Component', () => {
  const SampleTableCell = ({
    disabled = false,
    backgroundColor,
    header = false,
  }: {
    disabled?: boolean;
    backgroundColor?: string;
    header?: boolean;
  }) => (
    <Table>
      <tbody>
        <TableRow>
          <TableCell
            disabled={disabled}
            backgroundColor={backgroundColor}
            header={header}
          >
            Test Cell Content
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
  );

  test('renders table cell with content', () => {
    render(<SampleTableCell />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toBeVisible();
  });

  test('renders as header cell when header prop is true', () => {
    render(<SampleTableCell header />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement.tagName).toBe('TH');
  });

  test('renders as data cell when header prop is false', () => {
    render(<SampleTableCell header={false} />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement.tagName).toBe('TD');
  });

  test('applies disabled styles when disabled', () => {
    render(<SampleTableCell disabled />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement).toHaveStyle('cursor: not-allowed');
    expect(cellElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<SampleTableCell backgroundColor="#ff0000" />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement).toHaveStyle('background-color: #ff0000');
  });

  test('has correct default styles for data cell', () => {
    render(<SampleTableCell />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement).toHaveStyle('background-color: transparent');
    expect(cellElement).toHaveStyle('cursor: default');
    expect(cellElement).toHaveStyle('opacity: 1');
  });

  test('has correct styles for header cell', () => {
    render(<SampleTableCell header />);
    const cellElement = screen.getByText('Test Cell Content');
    expect(cellElement).toHaveStyle('background-color: #f8f9fa');
    expect(cellElement).toHaveStyle('font-weight: 600');
  });
});
