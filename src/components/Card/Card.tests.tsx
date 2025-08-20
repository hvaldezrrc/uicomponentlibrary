import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card with title and content', () => {
    render(<Card title="Test Title" content="Test content" />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();

    const cardElement = screen.getByText('Test Title').closest('div');
    expect(cardElement).toBeVisible();
  });

  test('renders card with title only', () => {
    render(<Card title="Title Only" />);

    expect(screen.getByText('Title Only')).toBeInTheDocument();
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
  });

  test('renders card with content only', () => {
    render(<Card content="Content only" />);

    expect(screen.getByText('Content only')).toBeInTheDocument();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  test('renders card with custom children', () => {
    render(
      <Card title="Custom Card">
        <div data-testid="custom-content">Custom children content</div>
      </Card>
    );

    expect(screen.getByText('Custom Card')).toBeInTheDocument();
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    expect(screen.getByText('Custom children content')).toBeInTheDocument();
  });

  test('prioritizes children over content prop', () => {
    render(
      <Card title="Priority Test" content="This should not appear">
        <div>Children content appears instead</div>
      </Card>
    );

    expect(screen.getByText('Priority Test')).toBeInTheDocument();
    expect(
      screen.getByText('Children content appears instead')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('This should not appear')
    ).not.toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<Card title="Disabled Card" content="Disabled content" disabled />);
    const cardElement = screen.getByText('Disabled Card').closest('div');

    expect(cardElement).toHaveStyle('cursor: not-allowed');
    expect(cardElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(<Card title="Custom Background" backgroundColor="#ff0000" />);
    const cardElement = screen.getByText('Custom Background').closest('div');

    expect(cardElement).toHaveStyle('background-color: #ff0000');
  });

  test('applies custom width and height', () => {
    render(<Card title="Sized Card" width="300px" height="200px" />);
    const cardElement = screen.getByText('Sized Card').closest('div');

    expect(cardElement).toHaveStyle('width: 300px');
    expect(cardElement).toHaveStyle('height: 200px');
  });

  test('has correct default styles', () => {
    render(<Card title="Default Card" content="Default content" />);
    const cardElement = screen.getByText('Default Card').closest('div');

    expect(cardElement).toHaveStyle('background-color: #ffffff');
    expect(cardElement).toHaveStyle('cursor: default');
    expect(cardElement).toHaveStyle('opacity: 1');
    expect(cardElement).toHaveStyle('width: auto');
    expect(cardElement).toHaveStyle('height: auto');
  });

  test('applies custom className', () => {
    render(<Card title="Custom Class" className="custom-card" />);
    const cardElement = screen.getByText('Custom Class').closest('div');

    expect(cardElement).toHaveClass('custom-card');
  });

  test('renders empty card gracefully', () => {
    render(<Card />);

    // Should render the card container even without content
    const cardElement = document.querySelector('div');
    expect(cardElement).toBeInTheDocument();
  });

  test('handles long content properly', () => {
    const longContent =
      'This is a very long piece of content that should wrap properly within the card and maintain good readability and spacing throughout the entire text block.';

    render(<Card title="Long Content Card" content={longContent} />);

    expect(screen.getByText('Long Content Card')).toBeInTheDocument();
    expect(screen.getByText(longContent)).toBeInTheDocument();
  });
});
