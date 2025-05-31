# 🏗 Scaffold-ETH 2 + Blockscout Integration

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Scaffold-ETH Docs</a> |
  <a href="https://scaffoldeth.io">Scaffold-ETH Website</a> |
  <a href="https://www.blockscout.com/">Blockscout</a> |
  <a href="https://docs.blockscout.com/">Blockscout Docs</a>
</h4>

## 🎯 ETH Global Prague 2025 Hackathon Project

This project was created for the **ETH Global Prague 2025 Hackathon**, showcasing the powerful integration between Scaffold-ETH 2 and Blockscout's blockchain exploration capabilities.

## 🔍 Blockscout Integration

We are leveraging the powerful **Blockscout SDK** and **API** on Scaffold-ETH to extend and improve its functionality. This integration brings enhanced blockchain exploration capabilities, advanced analytics, and comprehensive smart contract interaction tools to your dApp development experience.

## 🚀 About Scaffold-ETH 2

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.
- 🔍 **Blockscout Integration**: Enhanced blockchain exploration and analytics capabilities.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## 📋 Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## 🚀 Quickstart

To get started with this Blockscout-enhanced Scaffold-ETH 2 project, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```bash
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```bash
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```bash
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```bash
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contracts in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`

## 🔗 Blockscout Resources

- **[Official Website](https://www.blockscout.com/)**: Learn more about Blockscout's blockchain explorer solutions
- **[Documentation](https://docs.blockscout.com/)**: Comprehensive guides and API references
- **[API Reference](https://docs.blockscout.com/devs/apis/rest)**: Detailed API documentation for developers
- **[GitHub](https://github.com/blockscout/blockscout)**: Open-source codebase and contributions

## 📚 Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

For Blockscout integration details, visit the [Blockscout documentation](https://docs.blockscout.com/).

## 🏆 ETH Global Prague 2025

This project demonstrates the seamless integration of Scaffold-ETH 2 with Blockscout's powerful blockchain exploration tools, created as part of the ETH Global Prague 2025 Hackathon. The combination provides developers with an enhanced toolkit for building, debugging, and monitoring decentralized applications.
