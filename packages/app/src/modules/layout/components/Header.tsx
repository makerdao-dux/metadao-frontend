import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useContext } from 'react';
import { Flex, Link } from 'theme-ui';
import { ConfigContext } from '../../config/context/ConfigContext';
import ThemeSwitch from '../../ui/components/ThemeSwitch';

export function Header(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);

  return (
    <Flex sx={{ justifyContent: 'space-between', padding: 3 }}>
      <Link href="/" title="Home page">
        <div style={{ marginLeft: '5px' }}>
          <img src={siteConfig.logo} alt="logo" width={35} height={35} />
        </div>
      </Link>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/vaults" title="Vaults">
            Vaults
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/delegates" title="delegates">
            Delegates
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/farms" title="farms">
            Farms
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/dsr" title="dsr">
            DSR
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/config" title="config">
            Config
          </Link>
        </Flex>
        <Flex sx={{ mr: 3 }}>
          <Link variant="nav" href="#/styles" title="styles">
            Styles
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <ThemeSwitch />
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
