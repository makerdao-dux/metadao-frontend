import { defineConfig } from "@dethcrypto/eth-sdk";
export const contracts = {
  mainnet: {
    dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
  optimism: {
    dai: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1"
  },
  arbitrumOne: {
    dai: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
  },
  // goerli: {
  //   dai: "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60",
  // },
};
export default defineConfig({
  contracts,
} as any);
