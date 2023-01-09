import React, { useEffect, useState } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading } from 'theme-ui';

const DelegatesData = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const ipfsHash =
      'Qmf6kf984EsjSPPkAi26vohLZ68Kd4Tjojg9QbS7z5Rdrg/0x22d5294a23d49294Bf11D9db8bEda36e104ad9b3/metrics.md';
    const gateway = 'gold-working-mastodon-455.mypinata.cloud'; //or gateway.pinata.cloud
    const fetchDelegateInfo = async () => {
      const response = await fetch(`https://${gateway}/ipfs/${ipfsHash}`);
      setInfo(await response.text());
    };
    fetchDelegateInfo();
  }, []);

  return <div>{info}</div>;
};

function Delegates(): React.ReactElement {
  return (
    <Layout>
      <Heading>DELEGATES</Heading>
      <DelegatesData />
    </Layout>
  );
}

export default Delegates;
