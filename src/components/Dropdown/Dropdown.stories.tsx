import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option',
  },
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'option2',
    placeholder: 'Select an option',
  },
};

export const Countries: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled dropdown',
  },
};

export const CustomBackground: Story = {
  args: {
    options: sampleOptions,
    backgroundColor: '#f0f8ff',
    placeholder: 'Custom background',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Choose your location...',
  },
};
