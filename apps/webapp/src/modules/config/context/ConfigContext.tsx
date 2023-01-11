import React from 'react';
import { SiteConfig } from '../types/site-config';
import { UserConfig } from '../types/user-config';

import { RPC } from '../types/rpc';
import { defaultConfig as siteConfig } from '../default-config';

// Default user config
const defaultUserConfig: UserConfig = {
  rpcs: []
};

export interface ConfigContextProps {
  siteConfig: SiteConfig;
  userConfig: UserConfig;
  rpcs: RPC[];
  updateRPC: (rpc: RPC) => void;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  siteConfig: siteConfig,
  userConfig: defaultUserConfig,
  rpcs: [],
  updateRPC: () => {
    // do nothing.
  }
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [userConfig, setUserConfig] = React.useState<UserConfig>(defaultUserConfig);

  // Check the user settings on load
  React.useEffect(() => {
    console.log('getting user settings');
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

  return (
    <ConfigContext.Provider
      value={{
        siteConfig,
        userConfig,
        updateRPC,
        rpcs: siteConfig.rpcs.map(siteRPC => {
          const userRPC = userConfig.rpcs.find(i => i.chainId === siteRPC.chainId && i.url.length > 0);

          if (userRPC) {
            return userRPC;
          }
          return siteRPC;
        })
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
