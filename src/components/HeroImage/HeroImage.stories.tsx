import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    height: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image service for demo purposes
const landscapeUrl =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
const mountainUrl =
  'https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
const cityUrl =
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

export const Default: Story = {
  args: {
    src: landscapeUrl,
    alt: 'Beautiful landscape',
    title: 'Welcome to Our Platform',
    subtitle: 'Discover amazing features and capabilities',
  },
};

export const WithoutText: Story = {
  args: {
    src: mountainUrl,
    alt: 'Mountain landscape',
  },
};

export const TitleOnly: Story = {
  args: {
    src: cityUrl,
    alt: 'City skyline',
    title: 'Explore the City',
  },
};

export const SubtitleOnly: Story = {
  args: {
    src: landscapeUrl,
    alt: 'Serene landscape',
    subtitle: 'Experience tranquility in nature',
  },
};

export const CustomHeight: Story = {
  args: {
    src: mountainUrl,
    alt: 'Tall mountain view',
    title: 'Reach New Heights',
    subtitle: 'Push beyond your limits',
    height: '600px',
  },
};

export const SmallHeight: Story = {
  args: {
    src: cityUrl,
    alt: 'City overview',
    title: 'Urban Adventure',
    subtitle: 'Compact city experience',
    height: '250px',
  },
};

export const Disabled: Story = {
  args: {
    src: landscapeUrl,
    alt: 'Disabled hero image',
    title: 'Disabled Hero',
    subtitle: 'This hero section is disabled',
    disabled: true,
  },
};

export const CustomBackground: Story = {
  args: {
    src: '', // No image to show background color
    alt: 'Custom background hero',
    title: 'Custom Background',
    subtitle: 'This uses a custom background color',
    backgroundColor: '#667eea',
  },
};

export const LongContent: Story = {
  args: {
    src: mountainUrl,
    alt: 'Mountain panorama',
    title: 'This is a Very Long Title That Demonstrates Text Wrapping',
    subtitle:
      'This is also a longer subtitle that shows how the hero component handles multiple lines of text content and maintains good readability across different screen sizes',
  },
};

export const ResponsiveDemo: Story = {
  args: {
    src: landscapeUrl,
    alt: 'Responsive hero image',
    title: 'Responsive Design',
    subtitle: 'Resize your browser to see how this adapts',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};
