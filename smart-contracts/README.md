# Implementing Partners - Smart Contracts

## Build Instructions

```shell
npm install
npx hardhat clean
npx hardhat compile
```

## Test Instructions

```shell
npx hardhat test
npx hardhat coverage
```

## Deployment Instructions

```shell
npx hardhat run scripts/deploy.ts
```

Deploy to testnet:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Etherscan verification:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
