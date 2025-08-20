import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    htmlFor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Label Text',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Label',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Label',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};

export const WithHtmlFor: Story = {
  args: {
    text: 'Email Address',
    htmlFor: 'email-input',
  },
};

export const CustomBackground: Story = {
  args: {
    text: 'Custom Background Label',
    backgroundColor: '#f0f8ff',
  },
};
