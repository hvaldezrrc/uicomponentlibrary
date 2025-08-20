import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

describe('Table Component', () => {
  const SampleTable = ({
    disabled = false,
    backgroundColor,
  }: {
    disabled?: boolean;
    backgroundColor?: string;
  }) => (
    <Table disabled={disabled} backgroundColor={backgroundColor}>
      <TableHeader>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );

  test('renders table with content', () => {
    render(<SampleTable />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toBeVisible();

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<SampleTable disabled />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('cursor: not-allowed');
    expect(tableElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<SampleTable backgroundColor="#ff0000" />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: #ff0000');
  });

  test('has correct default styles', () => {
    render(<SampleTable />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: #ffffff');
    expect(tableElement).toHaveStyle('cursor: default');
    expect(tableElement).toHaveStyle('opacity: 1');
    expect(tableElement).toHaveStyle('border-collapse: collapse');
  });

  test('applies responsive styles', () => {
    render(<SampleTable />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('width: 100%');
  });
});
