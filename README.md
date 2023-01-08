# Maker MetaDAO frontend

[![GitHub release](https://img.shields.io/github/release/makerdao-dux/metadao-frontend.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)
[![GitHub commits](https://img.shields.io/github/commits-since/makerdao-dux/metadao-frontend/latest.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/commit/)

[![GitHub contributors](https://img.shields.io/github/contributors/makerdao-dux/metadao-frontend.svg?style=flat)](https://github.com/makerdao-dux/metadao-frontend/graphs/contributors)

[![Github All Releases](https://img.shields.io/github/downloads/makerdao-dux/metadao-frontend/total.svg)](https://GitHub.com/makerdao-dux/metadao-frontend/releases/)

## Packages

- app: WebApp built with react that serves as interface
- hooks: React hooks to interact with the maker protocol
- contracts: Contracts and network configurations for the maker protocol

## Using Maker's subdao packages

```
npm install maker-hooks
npm install maker-contracts
```

Check the [documentation]() for detailed usage.


## Using Maker's Subdao web app

This repository contains a web app that can be reutilized by any Maker Subdao to launch a decentralized frontend. The webapp is located under ["apps/webapp"](./apps/webapp). 

The webapp is built with React and utilizes the other subdao packages as dependencies. Please check [Starting the web app](#starting-the-webapp) for more information.

To run the webapp locally execute:
`pnpm webapp`

## Installation & Development

## Commands

Please refer to [Installing Node.js and pnpm](#installing-nodejs-and-pnpm) to install the required dependencies first.

```
pnpm build -> Builds all packages.
pnpm webapp -> Starts the development server for the web app.
pnpm test -> Runs the unit tests suite across the different packages.
pnpm e2e -> Runs web app e2e tests.
```

###  Installing Node.js and pnpm

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

To start the local development webapp, run the following. This will run a [React](https://reactjs.org/) app (located at [`packages/app`](./packages/app)) that is set up for interacting with code while making changes.

```bash
pnpm app
```

Once the React dev server is running, you can make changes to any of the package source files (e.g. `packages/hooks`) and it will automatically update the app. (If the web app isn't automatically updating, try running `pnpm dev` to relink packages in development mode.)

<div align="right">
  <a href="#basic-guide">&uarr; back to top</a></b>
</div>
