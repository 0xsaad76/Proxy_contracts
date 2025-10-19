# Proxy Contract Deployment with OpenZeppelin, Hardhat, and Alchemy

This guide explains how to deploy a proxy contract using OpenZeppelin's upgradeable contract framework, Hardhat, and Alchemy on the Ethereum Sepolia network.

---

## Prerequisites

Ensure the following are set up before proceeding:

- **Node.js** and **npm**  
- **Hardhat** (installed in your project)  
- An **Alchemy account** with an API key  
- An **Ethereum wallet** (e.g., MetaMask) and its private key  
- An **Etherscan API key** for contract verification  

---

## Project Setup

### Initialize Your Project
Run the following commands to set up your project directory:

```bash
mkdir my-upgradeable-contract
cd my-upgradeable-contract
npm init -y
npm install --save-dev hardhat @openzeppelin/hardhat-upgrades
```

### Create the `.env` File
In the project root, create a `.env` file to store your credentials:

```plaintext
ALCHEMY_API_KEY=your-alchemy-api-key
PRIVATE_KEY=your-ethereum-wallet-private-key
ETHERSCAN_API_KEY=your-etherscan-api-key
```

Replace the placeholders with your actual API keys and private key.

---

## Deployment Steps

### Deploy the Initial Contract Version
Run the script to deploy the first version of your contract:

```bash
npx hardhat run --network sepolia ./scripts/deploy_box_v1.js
```

After deployment, note the **proxy contract address**, **implementation address**, and **admin address** from the script output.

### Verify the Contract on Etherscan
To verify the proxy contract, run:

```bash
npx hardhat verify --network sepolia <YOUR_CONTRACT_ADDRESS>
```

Replace your `<YOUR_CONTRACT_ADDRESS>` with the proxy address.

---

### Upgrade to a New Contract Version
To upgrade the contract to a new version, use the following command:

```bash
npx hardhat run --network sepolia ./scripts/upgrade_box_v2.js
```

Once the upgrade is complete, the proxy will point to the new implementation.

for more info : https://docs.openzeppelin.com/learn/upgrading-smart-contracts
