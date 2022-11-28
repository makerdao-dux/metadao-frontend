# Maker MetaDAO frontend

## High level specs

- Access to MetaDAO farms
- Ability to open and manage Maker vaults
- Ability to delegate MKR

## Forking and managing your own metadao frontend.

The Metadao frontend is customizable by editing the file `metadao.config.json`. In here you will be able to change things like:

- logo
- site name and description
- basic color palette

In order to perform other structural changes you will need to edit the codebase. Please refer to the section [Code Structure](#code-structure).

## Using the MetaDAO frontend

You have 3 options to utilize this frontend: you can download one of the [signed app releases](TBD), run the project locally or host a web version.
To build your own downlodoable application, please refer to [Building the application](#building)

### Downloading the MetaDAO frontend app:

This app is an installer that allows you to access the core features of Maker metadaos, it will also allow you to configure your own RPC or local node to access your data.

- Latest Release: v0.0.0
  - Windows
  - MacOS
  - Ubuntu

Releases are bundled with [Electron](https://www.electronjs.org/) and display the current signature that represents the integrity of the source code.

The list of version signatures can be found [here](TBD). You can verify that your application is intact by checking your signature with the list of published signatures.

### Running the project locally:

To run the project locally:

1. Install Node in your computer
2. Clone or download this repositoty
3. Install dependencies

- `yarn` or `npm install` to install the dependencies

4. Fill in the environment variables

- NEXT_PUBLIC_RPC_PROVIDER_ARBITRUM
- NEXT_PUBLIC_RPC_PROVIDER_MAINNET
- NEXT_PUBLIC_RPC_PROVIDER_OPTIMISM

5. Execute `yarn dev` or `npm run dev` to start the project.
6. Visit `http://localhost:3000`

To see more information about other available commands, check [Development Commands](#development-commands)

### Deploying the application on a decentralized server

There are different ways to deploy the Metada frontend. It can be deployed on decentralized file systems like IPFS or Arweave, or using traditional infrastructure.

If you want to deploy the portal easily, we recommend using services like [Fleek](https://fleek.co/)(Decentralized), [4Everland](https://www.4everland.org/)(Decentralized) or [Vercel](https://vercel.org)(Centralized)

If you want to upload manually this application to IPFS, you can do it by running `yarn ipfs` - This requires setting the IPFS pinner sdk correctly (see the file `scripts/ipfs` for more information) - or alternatively running `yarn build` and then uploading the dist folder to IPFS.
Once you optain the ipfs hash, you can introduce that in a decentralized name server like ENS.

### Configuring a decentralized DNS.

If you hosted your website on IPFS you can point your decentralized domain name to it. Follow the next links for more information:

- [ENS](https://docs.ipfs.tech/how-to/websites-on-ipfs/link-a-domain/) (.eth domains)
- [Unstoppabble domains](https://docs.unstoppabledomains.com/d-websites/connect-ipfs/)
- [Handshake](https://docs.ipfs.tech/how-to/websites-on-ipfs/link-a-domain/#handshake)
- or alternatively [Ethstorage](https://www.youtube.com/watch?v=rRI-3RV_JHw)

## Development commands

This project is built on top of [NextJS](https://nextjs.org/).

- `yarn dev` starts the development server locally.
- `yarn build` builds a static distribution of the project that can be hosted on IPFS.
- `yarn prettier` cleans the formatting of the code files.
- `yarn ipfs` deploys the portal to IPFS. Depends on setting correctly the environment variables for IPFS. See `scripts/ipfs` implementation if you want to change the IPFS pinner.
- `yarn electron:build` builds and bundles a downlodable/executable version of the app.
- `yarn electron:app` launches the application in the electron wrapper.
- `yarn eth-sdk` fetches the latest ABIs from the contracts defined at `eth-sdk/config.ts`


## Building the downlodable application

The MetaDAO frontend uses [electronJS builder](https://www.electron.build/) to create a downlodable/installable application for Windows, Linux and MacOS.

To build the application yourself, run the command: `yarn electron:build`. You will need to update the file `.electron-builder.config.js` with the new app name, logo and other configurations. For more information about the configuration options, check out [Electron builder documentation](https://www.electron.build/configuration/configuration)

Do not expect building the application for all platforms from one platform. To build on Mac you need to be on a MacOS (for example). In order to build automatically for all platforms you can use tooling and automation like Github Actions or Travis. [See more info](https://www.electron.build/multi-platform-build.html).
