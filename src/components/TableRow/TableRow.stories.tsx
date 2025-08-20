import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { Table } from '../Table/Table';
import { TableCell } from '../TableCell/TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
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
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
        <TableCell>Admin</TableCell>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <Story />
        </tbody>
      </Table>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <TableCell>Disabled Row</TableCell>
        <TableCell>disabled@example.com</TableCell>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <Story />
        </tbody>
      </Table>
    ),
  ],
};

export const CustomBackground: Story = {
  args: {
    backgroundColor: '#fff3cd',
    children: (
      <>
        <TableCell>Highlighted Row</TableCell>
        <TableCell>special@example.com</TableCell>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Table>
        <tbody>
          <Story />
        </tbody>
      </Table>
    ),
  ],
};
