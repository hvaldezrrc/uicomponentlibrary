import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';
import { TableFooter } from '../TableFooter/TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell header>Name</TableCell>
            <TableCell header>Email</TableCell>
            <TableCell header>Role</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell header>Product</TableCell>
            <TableCell header>Price</TableCell>
            <TableCell header>Quantity</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Product A</TableCell>
            <TableCell>$10.00</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product B</TableCell>
            <TableCell>$15.00</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$95.00</TableCell>
            <TableCell>8</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell header>Name</TableCell>
            <TableCell header>Status</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};

export const CustomBackground: Story = {
  args: {
    backgroundColor: '#f0f8ff',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableCell header>Feature</TableCell>
            <TableCell header>Status</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Authentication</TableCell>
            <TableCell>Complete</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dashboard</TableCell>
            <TableCell>In Progress</TableCell>
          </TableRow>
        </tbody>
      </>
    ),
  },
};
