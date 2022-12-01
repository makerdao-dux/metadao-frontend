import { useContext } from 'react';
import { formatUnits } from 'ethers/lib/utils.js';
import { DaiBalanceContext } from '../context/DaiBalance.context';

export default function DaiBalance(): React.ReactElement {
  const { balance } = useContext(DaiBalanceContext);

  return (
    <div>
      <div>
        <div className="title">Your DAI balance:</div>
        <div className="amount">Mainnet: {formatUnits(balance.mainnet)}</div>
        <div className="amount">Arbitrum: {formatUnits(balance.arbitrum)}</div>
        <div className="amount">Optimsim: {formatUnits(balance.optimism)}</div>
      </div>

      <style jsx>{`
        .title {
          font-weight: bold;
        }

        .amount {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
