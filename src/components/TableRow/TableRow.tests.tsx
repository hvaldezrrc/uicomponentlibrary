import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';
import { Table } from '../Table/Table';
import { TableCell } from '../TableCell/TableCell';

describe('TableRow Component', () => {
  const SampleTableRow = ({
    disabled = false,
    backgroundColor,
  }: {
    disabled?: boolean;
    backgroundColor?: string;
  }) => (
    <Table>
      <tbody>
        <TableRow disabled={disabled} backgroundColor={backgroundColor}>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );

  test('renders table row with content', () => {
    render(<SampleTableRow />);
    const rowElement = screen.getByText('John Doe').closest('tr');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toBeVisible();

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<SampleTableRow disabled />);
    const rowElement = screen.getByText('John Doe').closest('tr');
    expect(rowElement).toHaveStyle('cursor: not-allowed');
    expect(rowElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<SampleTableRow backgroundColor="#ff0000" />);
    const rowElement = screen.getByText('John Doe').closest('tr');
    expect(rowElement).toHaveStyle('background-color: #ff0000');
  });

  test('has correct default styles', () => {
    render(<SampleTableRow />);
    const rowElement = screen.getByText('John Doe').closest('tr');
    expect(rowElement).toHaveStyle('background-color: transparent');
    expect(rowElement).toHaveStyle('cursor: default');
    expect(rowElement).toHaveStyle('opacity: 1');
  });
});
