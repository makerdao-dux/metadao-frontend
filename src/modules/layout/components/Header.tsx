import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import config from '../../config';
import { Link } from 'react-router-dom';
export function Header(): React.ReactElement {
  return (
    <div>
      <div className="header-wrapper" style={{ position: 'fixed', top: '0', left: '0' }}>
        <div className="header" style={{ display: 'flex' }}>
          <div className="left">
            <h1>
              <Link to="/" title="Home page">
                <div style={{ marginLeft: '5px' }}>
                  <img src={config.logo} alt="logo" width={35} height={35} />
                </div>
              </Link>
            </h1>
          </div>
          <div className="right">
            <div className="links">
              <div className="link">
                <Link to="/vaults" title="Vaults">
                  Vaults
                </Link>
              </div>
              <div className="link">
                <Link to="/delegates" title="delegates">
                  delegates
                </Link>
              </div>
              <div className="link">
                <Link to="/farms" title="farms">
                  farms
                </Link>
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
