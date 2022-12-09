import React from 'react';
import { Token } from '../types/token';

export default function TokenIcon({
  token,
  width = 50
}: {
  token: Token;
  width?: number;
}): React.ReactElement {
  return <img src={token.logo} width={width} height={width} alt={token.name} />;
}
