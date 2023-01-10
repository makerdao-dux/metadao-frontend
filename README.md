# Maker MetaDAO frontend

[![GitHub release](https://img.shields.io/github/release/makerdao-dux/metadao-frontend.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)
[![GitHub commits](https://img.shields.io/github/commits-since/makerdao-dux/metadao-frontend/latest.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/commit/)

[![GitHub contributors](https://img.shields.io/github/contributors/makerdao-dux/metadao-frontend.svg?style=flat)](https://github.com/makerdao-dux/metadao-frontend/graphs/contributors)

[![Github All Releases](https://img.shields.io/github/downloads/makerdao-dux/metadao-frontend/total.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)

## Packages

- app: WebApp built with react that serves as interface
- hooks: React hooks to interact with the maker protocol
- contracts: Contracts and network configurations for the maker protocol

### Using Maker's subdao packages

```
npm install maker-hooks
npm install maker-contracts
```

Check the [documentation]() for detailed usage.

### Using Maker's Subdao web app

This repository contains a web app that can be reutilized by any Maker Subdao to launch a decentralized frontend. The webapp is located under ["apps/webapp"](./apps/webapp).

The webapp is built with React and utilizes the other subdao packages as dependencies. Please check [Starting the web app](#starting-the-webapp) for more information.

To run the webapp locally execute:
`pnpm webapp`

## Installation & Development

### Commands

Please refer to [Installing Node.js and pnpm](#installing-nodejs-and-pnpm) to install the required dependencies first.

```
pnpm build -> Builds all packages.
pnpm webapp -> Starts the development server for the web app.
pnpm test -> Runs the unit tests suite across the different packages.
pnpm e2e -> Runs web app e2e tests.
```

### Installing Node.js and pnpm

This repository uses [pnpm workspaces](https://pnpm.io/workspaces) to manage multiple projects. You need to install **Node.js v16 or higher** and **pnpm v7 or higher**.

You can run the following commands in your terminal to check your local Node.js and npm versions:

```bash
node -v
pnpm -v
```

If the versions are not correct or you don't have Node.js or pnpm installed, download and follow their setup instructions:

- Install Node.js using [fnm](https://github.com/Schniz/fnm) or from the [official website](https://nodejs.org)
- Install [pnpm](https://pnpm.io/installation)

### Installing dependencies

Once in the project's root directory, run the following command to install the project's dependencies:

```bash
pnpm install
```

### Starting the webapp

To start the local development webapp, run the following. This will run a [React](https://reactjs.org/) app (located at [`packages/webapp`](./packages/webapp)) that is set up for interacting with code while making changes.

```bash
pnpm webapp
```

Once the React dev server is running, you can make changes to any of the package source files (e.g. `packages/hooks`) and it will automatically update the app. (If the web app isn't automatically updating, try running `pnpm dev` to relink packages in development mode.)

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

## Theming

This project is configured with [Theme UI](https://theme-ui.com/). Theme-UI allows to define a theme configuration that is used by the whole application. To edit the base theme, go to `modules/ui/theme.ts`.

We try to use a modular approach of components, following a design system that allows us to create complex UIs by combining existing components.

You can visualize a list of the available components by runnign our Storybook with the command: `yarn storybook`

# Building a Web Bundle

First you must install `go/bundle`, follow [these steps](https://github.com/WICG/webpackage/tree/main/go/bundle#getting-started) to install (note: this will require you to install Go as well).

Next, build the application with `yarn build`, this will create a `dist` folder.

Now we will use the `gen-bundle` tool to build the web bundle, enter the following command:

`gen-bundle -dir dist -baseURL https://example.com/ -primaryURL https://example.com/ -o metadaoapp.wbn`

This takes our `dist` directory and bundles it into a file called `metadaoapp.wbn`. Since we are not using a resource URL we simply enter a dummy URL and the bundler will use the local files specified in `dist`. For more information see the `go/bundle` [documentation](https://github.com/WICG/webpackage/tree/main/go/bundle#from-a-local-directory).

<div align="right">
  <a href="#basic-guide">&uarr; back to top</a></b>
</div>
