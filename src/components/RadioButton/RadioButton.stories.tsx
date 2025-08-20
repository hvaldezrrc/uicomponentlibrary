import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default-radio',
    value: 'option1',
    label: 'Option 1',
  },
};

export const Checked: Story = {
  args: {
    name: 'checked-radio',
    value: 'option1',
    label: 'Selected Option',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled-radio',
    value: 'option1',
    label: 'Disabled Option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked-radio',
    value: 'option1',
    label: 'Disabled Selected',
    disabled: true,
    checked: true,
  },
};

export const CustomBackground: Story = {
  args: {
    name: 'custom-radio',
    value: 'option1',
    label: 'Custom Background',
    backgroundColor: '#e3f2fd',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioButton name="size" value="small" label="Small" checked={true} />
      <RadioButton name="size" value="medium" label="Medium" />
      <RadioButton name="size" value="large" label="Large" />
    </div>
  ),
};

export const LongLabel: Story = {
  args: {
    name: 'long-label-radio',
    value: 'option1',
    label:
      'This is a very long label that demonstrates how the radio button component handles longer text content',
  },
};
