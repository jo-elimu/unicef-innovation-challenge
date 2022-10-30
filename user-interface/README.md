# Implementing Partners - User Interface

User interface for interacting with the [smart contract](../smart-contracts/README.md).

## Build Instructions

```
npm install
npm run build
npm run dev
```

Then open http://localhost:3000 in a browser.

## Functionalities

### 1. Implementing Partner receives the funds from UNICEF

UNICEF transfers ETH to the [smart contract](../smart-contracts/README.md).

### 2. Implementing Partner distributes the funds, while maintaining a detailed record of expenditure.

![](https://user-images.githubusercontent.com/1451036/198858515-a050da43-36d7-4a03-9373-81acbb0e7bc1.png)

### 3. Direct distribution of funds to beneficiaries.

The implementing partner connects their Ethereum wallet and presses the "Distribute funds" button to initiate a distribution to a beneficiary.

The implementing partner is asked to provide a note explaining the expenditure when executing the transaction.

![](https://user-images.githubusercontent.com/1451036/198859367-ad449729-2808-42e5-8049-18138121ecc2.png)
