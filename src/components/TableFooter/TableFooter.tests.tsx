import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

describe('TableFooter Component', () => {
  const SampleTableFooter = ({
    disabled = false,
    backgroundColor,
  }: {
    disabled?: boolean;
    backgroundColor?: string;
  }) => (
    <Table>
      <TableFooter disabled={disabled} backgroundColor={backgroundColor}>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>$150.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );

  test('renders table footer with content', () => {
    render(<SampleTableFooter />);
    const footerElement = screen.getByText('Total').closest('tfoot');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toBeVisible();

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$150.00')).toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<SampleTableFooter disabled />);
    const footerElement = screen.getByText('Total').closest('tfoot');
    expect(footerElement).toHaveStyle('cursor: not-allowed');
    expect(footerElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<SampleTableFooter backgroundColor="#ff0000" />);
    const footerElement = screen.getByText('Total').closest('tfoot');
    expect(footerElement).toHaveStyle('background-color: #ff0000');
  });

  test('has correct default styles', () => {
    render(<SampleTableFooter />);
    const footerElement = screen.getByText('Total').closest('tfoot');
    expect(footerElement).toHaveStyle('background-color: #f8f9fa');
    expect(footerElement).toHaveStyle('cursor: default');
    expect(footerElement).toHaveStyle('opacity: 1');
  });
});
