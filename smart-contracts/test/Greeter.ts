import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello");

    const setGreetingTx = await greeter.setGreeting("Hola");

    // Wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola");
  });
});
