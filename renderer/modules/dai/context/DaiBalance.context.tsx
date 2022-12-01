import { BigNumber, ethers } from 'ethers';
import React, { createContext } from 'react';
import { useAccount } from 'wagmi';
import { contracts } from 'eth-sdk/config';
import mainnetAbi from 'eth-sdk/abis/mainnet/dai.json';
import optimismAbi from 'eth-sdk/abis/optimism/dai.json';
import arbitrumAbi from 'eth-sdk/abis/arbitrumOne/dai.json';
import useSWR from 'swr';

type TDaiBalance = {
  mainnet: BigNumber;
  goerli: BigNumber;
  optimism: BigNumber;
  arbitrum: BigNumber;
};

interface IBalanceContext {
  balance: TDaiBalance;
  refresh: () => void;
  error: any;
}

type ContextProviderProps = {
  children: React.ReactNode;
};

const DaiBalanceContext = createContext<IBalanceContext>({} as IBalanceContext);

const DaiBalanceContextProvider = (props: ContextProviderProps) => {
  const contractMainnet = new ethers.Contract(
    contracts.mainnet.dai,
    mainnetAbi,
    new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_PROVIDER_MAINNET)
  );

  const contractOptimism = new ethers.Contract(
    contracts.optimism.dai,
    optimismAbi,
    new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_PROVIDER_OPTIMISM)
  );

  const contractArbitrum = new ethers.Contract(
    contracts.arbitrumOne.dai,
    arbitrumAbi,
    new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_PROVIDER_ARBITRUM)
  );

  const { address } = useAccount();

  // Fetches every network balance using the configured providers
  const { data, mutate, error } = useSWR<TDaiBalance>(
    address ? `dai-balances-${address}` : null,
    async () => {
      const respMainnet = await contractMainnet.balanceOf(address);
      const respOptimism = await contractOptimism.balanceOf(address);
      const respArbitrum = await contractArbitrum.balanceOf(address);

      return {
        mainnet: respMainnet,
        optimism: respOptimism,
        arbitrum: respArbitrum,
        goerli: BigNumber.from(0)
      };
    }
  );

  // Balance, if fetched use fetched data, otherwise 0
  const balance = data
    ? data
    : {
        mainnet: BigNumber.from(0),
        goerli: BigNumber.from(0),
        optimism: BigNumber.from(0),
        arbitrum: BigNumber.from(0)
      };

  return (
    <DaiBalanceContext.Provider value={{ balance, refresh: mutate, error }}>
      {props.children}
    </DaiBalanceContext.Provider>
  );
};

export { DaiBalanceContextProvider, DaiBalanceContext };
