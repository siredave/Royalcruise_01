import React from 'react';

interface BrandLogoProps {
  className: string;
  loading?: 'eager' | 'lazy';
}

const LOGO_SOURCE =
  'https://lh3.googleusercontent.com/aida/AEtjO1WtLzvguGT5d9USfggFhH3SUATUtLSftzlKGu_pgcHmWS6HMCOf3OFfsw7Fkiz3JMlw1nlqIO1Hpl0DYNNJ3qxetuuXj-z3xdF_qiok_RKLYDxFD-wav1JBki2tR2mZuFtDWGvAACMDXZPXaV54NskbztRbRO9CZhDb6HqJWlKDNSfYXKtFXo2tkX_8F22WfB6WDrQyxdOqgjhAghL7L3XEvulrViMm4pY0UcFG1AQXewICfDrjiSZi90o';

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, loading }) => (
  <span
    role="img"
    aria-label="Royale cruize Cleaning Services Logo"
    className="relative inline-block shrink-0 leading-none"
  >
    <img
      src={LOGO_SOURCE}
      alt=""
      aria-hidden="true"
      className={className}
      loading={loading}
    />
    <svg
      viewBox="0 0 512 128"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <rect x="108" y="35" width="340" height="42" fill="#fff" />
      <text
        x="116"
        y="68"
        fill="#17452F"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="0.5"
      >
        ROYALE
      </text>
      <text
        x="240"
        y="68"
        fill="#E8B323"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="0"
      >
        CRUIZE
      </text>
    </svg>
  </span>
);
