import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import config from '../../config';

export function Header(): React.ReactElement {
  return (
    <div>
      <div className="header-wrapper" style={{position: 'fixed', top: '0', left: '0'}}>
        <div className="header" style={{ display: 'flex'}}>
          <div className="left">
            <h1>
              <a href="/" title="Home page">
                <div style={{ marginLeft: '5px' }}>
                  <img src={config.logo} alt="logo" width={35} height={35} />
                </div>
              </a>
            </h1>
          </div>
          <div className="right">
            <div className="links">
              <div className="link">
                <a href="/vaults" title="Vaults">
                  Vaults
                </a>
              </div>
              <div className="link">
                <a href="/delegates" title="delegates">
                  delegates
                </a>
              </div>
              <div className="link">
                <a href="/farms" title="farms">
                  farms
                </a>
              </div>
            </div>
            <div className="login-box">
              <ConnectButton
                accountStatus={{
                  smallScreen: 'avatar',
                  largeScreen: 'full'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}