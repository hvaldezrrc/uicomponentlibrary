import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'bold'],
    },
    disabled: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is default text content',
  },
};

export const Small: Story = {
  args: {
    content: 'This is small text',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    content: 'This is large text',
    size: 'large',
  },
};

export const Bold: Story = {
  args: {
    content: 'This is bold text',
    weight: 'bold',
  },
};

export const Light: Story = {
  args: {
    content: 'This is light text',
    weight: 'light',
  },
};

export const Disabled: Story = {
  args: {
    content: 'This is disabled text',
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    content: 'This is custom colored text',
    color: '#007bff',
  },
};

export const CustomBackground: Story = {
  args: {
    content: 'This text has a custom background',
    backgroundColor: '#f8f9fa',
  },
};

export const LongText: Story = {
  args: {
    content:
      'This is a longer piece of text that demonstrates how the component handles multiple lines and text wrapping. It should maintain good readability and spacing.',
  },
};
