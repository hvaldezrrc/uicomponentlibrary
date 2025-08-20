import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
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
      <TableRow>
        <TableCell header>Name</TableCell>
        <TableCell header>Email</TableCell>
        <TableCell header>Role</TableCell>
      </TableRow>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <TableRow>
        <TableCell header>Column 1</TableCell>
        <TableCell header>Column 2</TableCell>
      </TableRow>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
};

export const CustomBackground: Story = {
  args: {
    backgroundColor: '#e3f2fd',
    children: (
      <TableRow>
        <TableCell header>Product</TableCell>
        <TableCell header>Price</TableCell>
      </TableRow>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
};
