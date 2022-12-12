import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';

export function Footer(): React.ReactElement {
  const { config } = useContext(ConfigContext);
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
