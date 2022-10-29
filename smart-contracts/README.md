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
cp .env.example .env
```

```shell
npx hardhat run scripts/deploy.ts
```

Deploy to testnet:

```shell
npx hardhat run --network goerli scripts/deploy.ts
```

Etherscan verification:

```shell
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS "Hello"
```
