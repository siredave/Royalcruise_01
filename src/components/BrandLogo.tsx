import React from 'react';
import logo from '../assets/royale-cruize-logo.svg';

interface BrandLogoProps {
  className: string;
  loading?: 'eager' | 'lazy';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, loading }) => (
  <img
    src={logo}
    alt="Royale cruize Cleaning Services Logo"
    className={className}
    loading={loading}
  />
);
