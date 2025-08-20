import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || '400px'};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  background-color: ${(props) => props.backgroundColor || '#f8f9fa'};
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: ${(props) => {
      const height = props.height || '400px';
      if (typeof height === 'string' && height.includes('px')) {
        const numHeight = parseInt(height);
        return `${Math.max(250, numHeight * 0.75)}px`;
      }
      return '250px';
    }};
  }

  @media (max-width: 480px) {
    height: ${(props) => {
      const height = props.height || '400px';
      if (typeof height === 'string' && height.includes('px')) {
        const numHeight = parseInt(height);
        return `${Math.max(200, numHeight * 0.6)}px`;
      }
      return '200px';
    }};
  }
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 90%;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height = '400px',
  disabled = false,
  backgroundColor,
  className,
  ...props
}) => {
  return (
    <HeroContainer
      src={src}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      role="img"
      aria-label={alt}
      alt={alt}
      title={title}
      subtitle={subtitle}
      {...props}
    >
      {(title || subtitle) && (
        <ContentOverlay>
          {title && <HeroTitle>{title}</HeroTitle>}
          {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        </ContentOverlay>
      )}
    </HeroContainer>
  );
};
