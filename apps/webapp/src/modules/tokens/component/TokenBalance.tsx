import React from 'react';
import { useBalance } from 'wagmi';
import { Token } from '../types/token';
import LoadingPlaceholder from '../../ui/components/LoadingPlaceholder';

export default function TokenBalance({
  token,
  address
}: {
  token: Token;
  address?: `0x${string}`;
}): React.ReactElement {
  const { data } = useBalance({
    address: address,
    chainId: token.chainId,
    token: token.address as `0x${string}`
  });

  return (
    <>
      {data && data.formatted}
      {!data && <LoadingPlaceholder />}
    </>
  );
}
