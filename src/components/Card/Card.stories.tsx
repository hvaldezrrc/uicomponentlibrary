import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content:
      'This is the default card content. It provides a clean and simple layout for displaying information.',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Title Only Card',
  },
};

export const ContentOnly: Story = {
  args: {
    content:
      'This card has content but no title. It focuses entirely on the message or information being presented.',
  },
};

export const WithCustomChildren: Story = {
  args: {
    title: 'Card with Custom Content',
    children: (
      <div>
        <Text content="This card uses custom children instead of the content prop." />
        <br />
        <Button label="Learn More" variant="primary" />
      </div>
    ),
  },
};

export const FixedDimensions: Story = {
  args: {
    title: 'Fixed Size Card',
    content: 'This card has fixed width and height dimensions.',
    width: '300px',
    height: '200px',
  },
};

export const WideCard: Story = {
  args: {
    title: 'Wide Card Layout',
    content:
      'This is a wider card that demonstrates how the component handles different aspect ratios and content layouts.',
    width: '500px',
  },
};

export const TallCard: Story = {
  args: {
    title: 'Tall Card Layout',
    content:
      'This is a taller card that shows how the component handles more vertical space. It can accommodate longer content while maintaining good proportions and readability.',
    height: '300px',
    width: '250px',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled and shows the appropriate visual state.',
    disabled: true,
  },
};

export const CustomBackground: Story = {
  args: {
    title: 'Custom Background',
    content:
      'This card has a custom background color to match your design system.',
    backgroundColor: '#e3f2fd',
  },
};

export const ProductCard: Story = {
  args: {
    title: 'Premium Plan',
    width: '280px',
    children: (
      <div>
        <Text content="Perfect for growing businesses" size="small" />
        <div style={{ margin: '16px 0' }}>
          <Text content="$29/month" size="large" weight="bold" />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Text content="✓ Up to 100 users" size="small" />
          <br />
          <Text content="✓ Advanced analytics" size="small" />
          <br />
          <Text content="✓ Priority support" size="small" />
        </div>
        <Button label="Get Started" variant="primary" />
      </div>
    ),
  },
};

export const BlogPostCard: Story = {
  args: {
    title: 'Understanding React Components',
    width: '350px',
    children: (
      <div>
        <Text content="Learn the fundamentals of React components and how to build reusable UI elements for your applications." />
        <div style={{ marginTop: '16px', marginBottom: '20px' }}>
          <Text
            content="Published: March 15, 2024"
            size="small"
            color="#6c757d"
          />
        </div>
        <Button label="Read More" variant="secondary" size="small" />
      </div>
    ),
  },
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
      }}
    >
      <Card
        title="Feature One"
        content="Description of the first feature and its benefits for users."
      />
      <Card
        title="Feature Two"
        content="Description of the second feature and how it improves the user experience."
      />
      <Card
        title="Feature Three"
        content="Description of the third feature and its impact on productivity."
      />
    </div>
  ),
};
