import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img Component', () => {
  const sampleImageUrl = 'https://via.placeholder.com/300x200';

  test('renders image with src and alt', () => {
    render(<Img src={sampleImageUrl} alt="Test image" />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', sampleImageUrl);
    expect(imgElement).toHaveAttribute('alt', 'Test image');
  });

  test('applies disabled styles when disabled', () => {
    render(<Img src={sampleImageUrl} alt="Disabled image" disabled />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveStyle('cursor: not-allowed');
    expect(imgElement).toHaveStyle('opacity: 0.6');
  });

  test('applies custom background color', () => {
    render(
      <Img
        src={sampleImageUrl}
        alt="Custom background image"
        backgroundColor="#ff0000"
      />
    );
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveStyle('background-color: #ff0000');
  });

  test('applies width and height correctly', () => {
    render(
      <Img src={sampleImageUrl} alt="Sized image" width={200} height={150} />
    );
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveStyle('width: 200px');
    expect(imgElement).toHaveStyle('height: 150px');
  });

  test('applies width as string correctly', () => {
    render(<Img src={sampleImageUrl} alt="String width image" width="50%" />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveStyle('width: 50%');
  });

  test('has correct default styles', () => {
    render(<Img src={sampleImageUrl} alt="Default image" />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveStyle('background-color: transparent');
    expect(imgElement).toHaveStyle('cursor: default');
    expect(imgElement).toHaveStyle('opacity: 1');
    expect(imgElement).toHaveStyle('max-width: 100%');
    expect(imgElement).toHaveStyle('height: auto');
  });

  test('handles missing src gracefully', () => {
    render(<Img src="" alt="Empty src image" />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', '');
    expect(imgElement).toHaveAttribute('alt', 'Empty src image');
  });

  test('applies custom className', () => {
    render(
      <Img
        src={sampleImageUrl}
        alt="Custom class image"
        className="custom-image"
      />
    );
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveClass('custom-image');
  });
});
