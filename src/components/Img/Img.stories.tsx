import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image service for demo purposes
const sampleImageUrl =
  'https://via.placeholder.com/300x200/007bff/ffffff?text=Sample+Image';
const landscapeImageUrl =
  'https://via.placeholder.com/400x250/28a745/ffffff?text=Landscape';
const portraitImageUrl =
  'https://via.placeholder.com/250x400/dc3545/ffffff?text=Portrait';

export const Default: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'Sample image',
  },
};

export const WithDimensions: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'Image with specific dimensions',
    width: 200,
    height: 150,
  },
};

export const Landscape: Story = {
  args: {
    src: landscapeImageUrl,
    alt: 'Landscape image',
    width: 300,
  },
};

export const Portrait: Story = {
  args: {
    src: portraitImageUrl,
    alt: 'Portrait image',
    height: 300,
  },
};

export const Disabled: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'Disabled image',
    disabled: true,
  },
};

export const CustomBackground: Story = {
  args: {
    src: sampleImageUrl,
    alt: 'Image with custom background',
    backgroundColor: '#f0f8ff',
  },
};

export const SmallImage: Story = {
  args: {
    src: 'https://via.placeholder.com/100x100/6c757d/ffffff?text=Small',
    alt: 'Small image',
    width: 100,
    height: 100,
  },
};

export const ResponsiveImage: Story = {
  args: {
    src: 'https://via.placeholder.com/800x600/17a2b8/ffffff?text=Responsive+Image',
    alt: 'Responsive image that scales with container',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
