import config from '../../../metadao.config.json';

type Config = {
  name: string;
  description: string;
  palette: {
    text: string;
    background: string;
  };
  logo: string;
  favicon: string;
};

export default config as Config;
