import { expect } from "chai";
import { ethers } from "hardhat";

describe("ImplementingPartner", function () {
  it("Should deploy contract", async function () {
    const ImplementingPartner = await ethers.getContractFactory("ImplementingPartner");
    const implementingPartner = await ImplementingPartner.deploy("TestPartner")
    await implementingPartner.deployed();

    expect(implementingPartner.address).to.not.equal(undefined);
    expect(implementingPartner.address.length).to.equal(42);

    const partnerNameAfterDeployment = await implementingPartner.partnerName();
    expect(partnerNameAfterDeployment).to.not.equal(undefined);
    expect(partnerNameAfterDeployment).to.equal("TestPartner");
  });
});
