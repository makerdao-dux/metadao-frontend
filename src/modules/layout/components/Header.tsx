import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'theme-ui';
import { ConfigContext } from '../../config/context/ConfigContext';

export function Header(): React.ReactElement {
  const { config } = useContext(ConfigContext);

  return (
    <Flex sx={{ justifyContent: 'space-between', padding: 3 }}>
      <Link to="/" title="Home page">
        <div style={{ marginLeft: '5px' }}>
          <img src={config.logo} alt="logo" width={35} height={35} />
        </div>
      </Link>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ mr: 3 }}>
          <Link to="/vaults" title="Vaults">
            Vaults
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link to="/delegates" title="delegates">
            Delegates
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link to="/farms" title="farms">
            Farms
          </Link>
        </Flex>
        <Flex>
          <Link to="/config" title="config">
            Config
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full'
          }}
        />
      </Flex>
    </Flex>
  );
}
