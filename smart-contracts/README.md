# Implementing Partners - Smart Contracts

Goerli deployment: https://goerli.etherscan.io/address/0x3ac4da1d4a5f3a522d9da129a81589d13e322b97#code

Each Implementing Partner will have its own smart contract deployment: [`contracts/ImplementingPartner.sol`](contracts/ImplementingPartner.sol)

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
npx hardhat run scripts/deploy-ip.ts
```

Deploy to testnet:

```shell
npx hardhat run --network goerli scripts/deploy-ip.ts
```

Etherscan verification:

```shell
npx hardhat verify --network goerli DEPLOYED_CONTRACT_ADDRESS "Giga"
```
