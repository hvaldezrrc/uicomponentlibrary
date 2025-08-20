import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  const sampleImageUrl = 'https://via.placeholder.com/1200x400';

  test('renders hero image with basic props', () => {
    render(<HeroImage src={sampleImageUrl} alt="Test hero image" />);
    const heroElement = screen.getByRole('img');

    expect(heroElement).toBeInTheDocument();
    expect(heroElement).toBeVisible();
    expect(heroElement).toHaveAttribute('aria-label', 'Test hero image');
  });

  test('displays title and subtitle when provided', () => {
    render(
      <HeroImage
        src={sampleImageUrl}
        alt="Hero with content"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('displays only title when subtitle is not provided', () => {
    render(
      <HeroImage
        src={sampleImageUrl}
        alt="Hero with title only"
        title="Only Title"
      />
    );

    expect(screen.getByText('Only Title')).toBeInTheDocument();
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });

  test('displays only subtitle when title is not provided', () => {
    render(
      <HeroImage
        src={sampleImageUrl}
        alt="Hero with subtitle only"
        subtitle="Only Subtitle"
      />
    );

    expect(screen.getByText('Only Subtitle')).toBeInTheDocument();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  test('applies disabled styles when disabled', () => {
    render(<HeroImage src={sampleImageUrl} alt="Disabled hero" disabled />);
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveStyle('cursor: not-allowed');
    expect(heroElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(
      <HeroImage
        src={sampleImageUrl}
        alt="Custom background hero"
        backgroundColor="#ff0000"
      />
    );
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveStyle('background-color: #ff0000');
  });

  test('applies custom height', () => {
    render(
      <HeroImage src={sampleImageUrl} alt="Custom height hero" height="600px" />
    );
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveStyle('height: 600px');
  });

  test('has correct default styles', () => {
    render(<HeroImage src={sampleImageUrl} alt="Default hero" />);
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveStyle('background-color: #f8f9fa');
    expect(heroElement).toHaveStyle('cursor: default');
    expect(heroElement).toHaveStyle('opacity: 1');
    expect(heroElement).toHaveStyle('height: 400px');
    expect(heroElement).toHaveStyle('width: 100%');
  });

  test('applies background image correctly', () => {
    render(<HeroImage src={sampleImageUrl} alt="Background image hero" />);
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveStyle(`background-image: url(${sampleImageUrl})`);
    expect(heroElement).toHaveStyle('background-size: cover');
    expect(heroElement).toHaveStyle('background-position: center');
  });

  test('applies custom className', () => {
    render(
      <HeroImage
        src={sampleImageUrl}
        alt="Custom class hero"
        className="custom-hero"
      />
    );
    const heroElement = screen.getByRole('img');

    expect(heroElement).toHaveClass('custom-hero');
  });

  test('handles empty src gracefully', () => {
    render(<HeroImage src="" alt="Empty src hero" title="No Image" />);
    const heroElement = screen.getByRole('img');

    expect(heroElement).toBeInTheDocument();
    expect(screen.getByText('No Image')).toBeInTheDocument();
  });
});
