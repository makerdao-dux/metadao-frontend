import React from 'react';

type Props = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

export default function LoadingPlaceholder({
  width = '200px',
  height = '20px',
  borderRadius = '4px'
}: Props): React.ReactElement {
  return (
    <>
      <div
        className="loading-placeholder"
        style={{
          width: width,
          height: height,
          borderRadius,
          background: `linear-gradient(-45deg,grey,black,grey,black)`,
          backgroundSize: '400% 400%',
          opacity: '0.4',
          animation: 'gradient 10s ease infinite'
        }}
      />
    </>
  );
}
