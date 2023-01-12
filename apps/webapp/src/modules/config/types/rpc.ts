export type RPC = {
  chainId: number;
  url: string;
};

export enum RpcStatus {
  Custom = 'Custom RPC',
  Public = 'Public RPC',
  NoConnection = 'No RPC Connection'
}
