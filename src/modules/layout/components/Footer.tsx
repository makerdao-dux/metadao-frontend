import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';

export function Footer(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);
  return (
    <div>
      <div className="footer">
        <div className="link">
          <a href="/about">About</a>
        </div>
      </div>
      <div style={{ padding: '30px', textAlign: 'center' }}>2022 - {siteConfig.name}</div>
    </div>
  );
}
