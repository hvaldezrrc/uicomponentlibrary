import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
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
        <TableCell>Total</TableCell>
        <TableCell>$150.00</TableCell>
        <TableCell>10 items</TableCell>
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
        <TableCell>Summary</TableCell>
        <TableCell>Disabled</TableCell>
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
    backgroundColor: '#e8f5e8',
    children: (
      <TableRow>
        <TableCell>Grand Total</TableCell>
        <TableCell>$250.00</TableCell>
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
