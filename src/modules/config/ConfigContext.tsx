import React from 'react';

export interface ConfigContextProps {
  rpcUrl?: string;
  setRpcUrl: (rpcUrl: string) => void;
  saveRpcUrl: (rpcUrl: string) => void;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  rpcUrl: undefined,
  setRpcUrl: () => {},
  saveRpcUrl: () => {}
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [rpcUrl, setRpcUrl] = React.useState<string | undefined>(undefined);
  const [savedRpcUrl, setSavedRpcUrl] = React.useState<string | undefined>(undefined);

  // check for saved rpcUrl on load
  React.useEffect(() => {
    const rpcUrl = window.localStorage.getItem('rpcUrl');
    if (rpcUrl) {
      setSavedRpcUrl(rpcUrl);
    }
    console.log(rpcUrl);
  }, []);

  const saveRpcUrl = rpcUrl => {
    window.localStorage.removeItem('rpcUrl');
    window.localStorage.setItem('rpcUrl', rpcUrl);
  };

  return (
    <ConfigContext.Provider
      value={{
        rpcUrl: rpcUrl ?? savedRpcUrl,
        setRpcUrl: setRpcUrl,
        saveRpcUrl: saveRpcUrl
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
