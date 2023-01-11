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
  updateUserConfig: (config: UserConfig) => void;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  siteConfig: siteConfig,
  userConfig: defaultUserConfig,
  rpcs: [],
  updateUserConfig: () => {
    // do nothing.
  }
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
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
        window.localStorage.setItem('user-settings', JSON.stringify(userConfig));
      }
    }
  }, []);

  const updateUserConfig = (config: UserConfig) => {
    setUserConfig(config);
    window.localStorage.setItem('user-settings', JSON.stringify(config));
  };

  return (
    <ConfigContext.Provider
      value={{
        siteConfig,
        userConfig,
        updateUserConfig,
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
