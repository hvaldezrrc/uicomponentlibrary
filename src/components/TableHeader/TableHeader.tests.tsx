import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

describe('TableHeader Component', () => {
  const SampleTableHeader = ({
    disabled = false,
    backgroundColor,
  }: {
    disabled?: boolean;
    backgroundColor?: string;
  }) => (
    <Table>
      <TableHeader disabled={disabled} backgroundColor={backgroundColor}>
        <TableRow>
          <TableCell header>Name</TableCell>
          <TableCell header>Email</TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  );

  test('renders table header with content', () => {
    render(<SampleTableHeader />);
    const headerElement = screen.getByText('Name').closest('thead');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeVisible();

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<SampleTableHeader disabled />);
    const headerElement = screen.getByText('Name').closest('thead');
    expect(headerElement).toHaveStyle('cursor: not-allowed');
    expect(headerElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<SampleTableHeader backgroundColor="#ff0000" />);
    const headerElement = screen.getByText('Name').closest('thead');
    expect(headerElement).toHaveStyle('background-color: #ff0000');
  });

  test('has correct default styles', () => {
    render(<SampleTableHeader />);
    const headerElement = screen.getByText('Name').closest('thead');
    expect(headerElement).toHaveStyle('background-color: #f8f9fa');
    expect(headerElement).toHaveStyle('cursor: default');
    expect(headerElement).toHaveStyle('opacity: 1');
  });
});
