# Maker MetaDAO frontend

[![GitHub release](https://img.shields.io/github/release/makerdao-dux/metadao-frontend.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)
[![GitHub commits](https://img.shields.io/github/commits-since/makerdao-dux/metadao-frontend/latest.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/commit/)

[![GitHub contributors](https://img.shields.io/github/contributors/makerdao-dux/metadao-frontend.svg?style=flat)](https://github.com/makerdao-dux/metadao-frontend/graphs/contributors)

[![Github All Releases](https://img.shields.io/github/downloads/makerdao-dux/metadao-frontend/total.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)

## High level specs

- Access to MetaDAO farms
- Ability to open and manage Maker vaults
- Ability to delegate MKR

---

## Using the MetaDAO frontend

You have 3 options to utilize this frontend: you can download one of the [app releases](https://github.com/makerdao-dux/metadao-frontend/releases), run the project locally or host a web version.
To build your own downlodoable application, please refer to [Building the application](#building)

### Downloading the MetaDAO frontend app:

This app is an installer that allows you to access the core features of Maker metadaos, it will also allow you to configure your own RPC or local node to access your data.

- Latest Release: v0.0.0
  - Windows
  - MacOS
  - Ubuntu

Releases are bundled with [Electron](https://www.electronjs.org/).

The list of releases can be found [here](https://github.com/makerdao-dux/metadao-frontend/releases).

### Running the project locally:

The Metadao frontend is customizable by editing the file `metadao.config.json`. In here you will be able to change things like:

- logo
- site name and description
- basic color palette

> In order to perform other structural changes you will need to edit the codebase. Please refer to the section [Code Structure](#code-structure).

To run the project locally:

1. Install Node in your computer
2. Clone or download this repositoty
3. Install dependencies

- `yarn` or `npm install` to install the dependencies

4. Fill in the environment variables

- RPC_PROVIDER_ARBITRUM
- RPC_PROVIDER_MAINNET
- RPC_PROVIDER_OPTIMISM

5. Execute `yarn dev` or `npm run dev` to start the project.
6. Visit `http://localhost:3000`

To see more information about other available commands, check [Development Commands](#development-commands)

#### Development commands

This project is built on top of [ReactJS](https://reactjs.org/).

- `yarn dev` starts the development server locally.
- `yarn build` builds a static distribution of the project that can be hosted on IPFS.
- `yarn prettier` cleans the formatting of the code files.
- `yarn ipfs` deploys the portal to IPFS. Depends on setting correctly the environment variables for IPFS. See `scripts/ipfs` implementation if you want to change the IPFS pinner.
- `yarn electron:package` builds and bundles a downlodable/executable version of the app.
- `yarn electron:app` launches the application in the electron wrapper.
- `yarn hardhat:mainnet --address 0x0000` launches a hardhat fork of mainnet on the block specified under `hardhat/mainnet.config.js`. It also seeds the addresses passed as parameter with test MKR, ETH and stETH.

### Deploying the application on a server

There are different ways to deploy the Metada frontend. It can be deployed on decentralized file systems like IPFS or Arweave, or using traditional infrastructure.

If you want to deploy the portal easily, we recommend using services like [Fleek](https://fleek.co/)(Decentralized), [4Everland](https://www.4everland.org/)(Decentralized) or [Vercel](https://vercel.org)(Centralized).

If you want to upload manually this application to IPFS, you can do it by running `yarn ipfs` - This requires setting the IPFS pinner sdk correctly (see the file `scripts/ipfs` for more information) - or alternatively running `yarn build` and then uploading the dist folder to IPFS.
Once you optain the ipfs hash, you can introduce that in a decentralized name server like ENS.

#### Deploying on Vercel

1. Visit https://vercel.com/ and create an account
2. Import the project from Github.
3. Configure the list of environment variables, see [running the project locally](#running-the-project-locally) for a list of environment variables.
4. Configure the custom commands to use the `src` subfolder.

- Build: `yarn build`
- Output directory: `src/dist`
- Development command : `yarn dev`

#### Deploying on Fleek

1. Visit https://app.fleek.co/#/
2. Import the project from Github.
3. Choose a file hosting (IPFS or ICP)
4. Configure the output directory: `src/dist`.

You can now configure an ENS, HNS or custom domain through the Fleek interface, under the settings tab.

#### Configuring a decentralized DNS.

If you hosted your website on IPFS you can point your decentralized domain name to it. Click on the following links for more information:

- [ENS](https://docs.ipfs.tech/how-to/websites-on-ipfs/link-a-domain/) (.eth domains)
- [Unstoppabble domains](https://docs.unstoppabledomains.com/d-websites/connect-ipfs/)
- [Handshake](https://docs.ipfs.tech/how-to/websites-on-ipfs/link-a-domain/#handshake)
- ## or alternatively [Ethstorage](https://www.youtube.com/watch?v=rRI-3RV_JHw)

### Building the downlodable application

The MetaDAO frontend uses [electronJS builder](https://www.electron.build/) to create a downlodable/installable application for Windows, Linux and MacOS.

To build the application yourself, run the command: `yarn electron:package`. You might need to update the file `package.json` with the new configuration. For more information about the configuration options, check out [Electron builder documentation](https://www.electron.build/configuration/configuration)

Do not expect building the application for all platforms from one platform. To build on Mac you need to be on a MacOS (for example). In order to build automatically for all platforms you can use tooling and automation like Github Actions or Travis. [See more info](https://www.electron.build/multi-platform-build.html).

This project is also configured with a Github Action that will build automatically the images for Windows, Mac and Linux when doing a new commit on the repo. For more information, check `.github/workflows/build.yml`, more information on how it works can be found [on this post](https://samuelmeuli.com/blog/2019-11-17-automating-the-release-of-electron-apps/).

#### Auto updating releases

The electron script located at `electron-app/main.js` includes the package electron-updater, that automatically checks for new versions of the application and notifies the user.

For auto-updating to work on macOS, your code needs to be signed. For more information check [this post](https://samuelmeuli.com/blog/2019-04-07-packaging-and-publishing-an-electron-app/).

---

## Running on test mode.

The application can be run locally on test mode. This is done by forking mainnet using Hardhat and Alchemy.

1. Make sure you have set the following environmental variables in your `.env` file:

`TESTNET_ALCHEMY_KEY=<my_key>` - Replace `<my_key>` with a valid API key which is used for forking mainnet with hardhat.

2. Run the command `yarn hardhat:mainnet` to spin up the local hardhat testnet.

3. Next, in a new terminal window, run the command `yarn hardhat:mainnet:fund --address <my_address>` replacing `<my_address>` with the address you wish to connect your wallet to the app with. This task will send all the necessary tokens to interact with the app to your address.

4. Run the app in development mode with `yarn dev`.

5. Make sure your wallet is connected to the testnet. For example, if using MetaMask, go to the network settings and make sure the chain ID is set to `31337` and the RPC URL is set to `http://localhost:8545`.

6. Click the address dropdown and select `Hardhat` from the list of networks to choose from. You should now see your testnet balance displayed.


### List of available commands

- `hardhat:mainnet` Forks ethereum mainnet
- `hardhat:optimism` Forks optimism
- `hardhat:arbitrum` Forks arbitrum
- `hardhat:mainnet:fund` Sends funds on the ethereum fork
- `hardhat:arbitrum:fund` Sends funds on the arbitrum fork
- `hardhat:optimism:fund` Sends funds on the optimism fork