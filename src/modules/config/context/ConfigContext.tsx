import React from 'react';
import { SiteConfig } from '../types/site-config';
import { UserConfig } from '../types/user-config';

import metadaoConfig from '../../../../metadao.config.json';
import { chainId } from 'wagmi';
import { RPC } from '../types/rpc';

// Default configuration used site-wide
// It merges the default configuration with the one from the metadao.config.json
// It stores all the RPCs the application will use, and also the user configured-ones
const defaultConfig: SiteConfig = {
  name: 'MetaDAO frontend',
  description: 'Interact with MakerDAO features',
  palette: {
    text: 'black',
    background: 'white'
  },
  logo: './images/logo.png',
  favicon: './images/logo.png',
  rpcs: [
    {
      chainId: chainId.mainnet,
      url: import.meta.env.RPC_PROVIDER_MAINNET || ''
    },
    {
      chainId: chainId.goerli,
      url: import.meta.env.RPC_PROVIDER_GOERLI || ''
    },
    {
      chainId: chainId.optimism,
      url: import.meta.env.RPC_PROVIDER_OPTIMISM || ''
    },
    {
      chainId: chainId.arbitrum,
      url: import.meta.env.RPC_PROVIDER_ARBITRUM || ''
    },
    {
      chainId: chainId.hardhat,
      url: 'http://localhost:8545/'
    }
  ],
  theme: 'light'
};

// Mix the default config with the metadao config
const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...metadaoConfig
};

// Default user config
const defaultUserConfig: UserConfig = {
  rpcs: [],
  theme: siteConfig.theme
};

export interface ConfigContextProps {
  config: SiteConfig;
  userConfig: UserConfig;
  updateRPC: (rpc: RPC) => void;
  getRPCForChainId: (id: number) => RPC | undefined;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  config: siteConfig,
  userConfig: defaultUserConfig,
  updateRPC: () => {},
  getRPCForChainId: () => undefined
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [config, setConfig] = React.useState<SiteConfig>(siteConfig);
  const [userConfig, setUserConfig] = React.useState<UserConfig>(defaultUserConfig);

  // Check the user settings on load
  React.useEffect(() => {
    const settings = window.localStorage.getItem('user-settings');
    if (settings) {
      try {
        const parsed = JSON.parse(settings);
        // TODO: We should verify the structure and integrity of the settings.
        setUserConfig({
          ...userConfig,
          ...parsed
        });
      } catch (e) {
        console.log('Invalid user settings, deleting');
        window.localStorage.setItem('user-settings', JSON.stringify(userConfig));
      }
    }
  }, []);

  // Handle the Update of RPCS from the user
  const updateRPC = (rpc: RPC) => {
    const newUserConfig = {
      ...userConfig,
      rpcs: [...userConfig.rpcs.filter(i => i.chainId !== rpc.chainId), rpc]
    };
    setUserConfig(newUserConfig);
    window.localStorage.setItem('user-settings', JSON.stringify(newUserConfig));
  };

  // Returns the right RPC for a chain ID, if the user one is not configured or not well formatted,
  // then default to the site config ones
  const getRPCForChainId = (id: number) => {
    const userRPC = userConfig.rpcs.find(i => i.chainId === id && i.url.length > 0);

    if (userRPC) {
      return userRPC;
    }

    return config.rpcs.find(i => i.chainId === id && i.url.length > 0);
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        userConfig,
        updateRPC,
        getRPCForChainId
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
