import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';
import { Table } from '../Table/Table';
import { TableRow } from '../TableRow/TableRow';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    header: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Table Cell Content',
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <TableRow>
            <Story />
          </TableRow>
        </tbody>
      </Table>
    ),
  ],
};

export const Header: Story = {
  args: {
    children: 'Header Cell',
    header: true,
  },
  decorators: [
    (Story) => (
      <Table>
        <thead>
          <TableRow>
            <Story />
          </TableRow>
        </thead>
      </Table>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Cell',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <TableRow>
            <Story />
          </TableRow>
        </tbody>
      </Table>
    ),
  ],
};

export const CustomBackground: Story = {
  args: {
    children: 'Custom Background Cell',
    backgroundColor: '#e8f5e8',
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <TableRow>
            <Story />
          </TableRow>
        </tbody>
      </Table>
    ),
  ],
};
