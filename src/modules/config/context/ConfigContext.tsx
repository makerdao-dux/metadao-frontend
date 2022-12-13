import React from 'react';
import { SiteConfig } from '../types/site-config';
import { UserConfig } from '../types/user-config';

import { RPC } from '../types/rpc';
import { defaultConfig as siteConfig } from '../default-config';

// Default user config
const defaultUserConfig: UserConfig = {
  rpcs: [],
  theme: siteConfig.theme
};

export interface ConfigContextProps {
  siteConfig: SiteConfig;
  userConfig: UserConfig;
  updateRPC: (rpc: RPC) => void;
  getRPCForChainId: (id: number) => RPC | undefined;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  siteConfig: siteConfig,
  userConfig: defaultUserConfig,
  updateRPC: () => {},
  getRPCForChainId: () => undefined
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [userConfig, setUserConfig] = React.useState<UserConfig>(defaultUserConfig);

  // Check the user settings on load
  React.useEffect(() => {
    console.log(siteConfig, userConfig)
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

    return siteConfig.rpcs.find(i => i.chainId === id && i.url.length > 0);
  };

  return (
    <ConfigContext.Provider
      value={{
        siteConfig,
        userConfig,
        updateRPC,
        getRPCForChainId
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
