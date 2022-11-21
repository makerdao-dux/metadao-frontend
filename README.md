# Maker MetaDAO frontend

## High level specs

- Access to MetaDAO farms
- Ability to open and manage Maker vaults
- Ability to delegate MKR

## Using the MetaDAO frontend

You have 3 options to utilize this frontend: you can download one of the [signed app releases](TBD), run the project locally or host a web version. 


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

## Forking and managing your own metadao frontend.

The Metadao frontend is customizable by editing the file `metadao.config.json`.


## Development commands

This project is built on top of [NextJS](https://nextjs.org/).

- `yarn dev` starts the development server locally. 
- `yarn build` builds a static distribution of the project that can be hosted on IPFS.
- `yarn prettier` cleans the formatting of the code files. 
- `yarn ipfs` deploys the portal to IPFS. Depends on setting correctly the environment variables for IPFS. See `modules/ipfs` implementation if you want to change the IPFS pinner.
- `yarn app` builds and bundles a downlodable/executable version of the app.