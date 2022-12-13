import { RPC } from './rpc';

export type SiteConfig = {
  name: string;
  description: string;
  palette: {
    text: string;
    background: string;
  };
  logo: string;
  favicon: string;
  rpcs: RPC[];
  theme: 'light' | 'dark';
};
