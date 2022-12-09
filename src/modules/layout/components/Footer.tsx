import React from 'react';
import config from '../../config';

export function Footer(): React.ReactElement {
  return (
    <div>
      <div className="footer">
        <div className="link">
          <a href="/about">About</a>
        </div>
      </div>
      <div style={{ padding: '30px', textAlign: 'center' }}>2022 - {config.name}</div>
    </div>
  );
}
