//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * This smart contract holds the funds sent from UNICEF to an Implementing Partner (IP).
 */
contract ImplementingPartner is AccessControl {

    string public partnerName;

    event FundsDistributed(address beneficiary, uint256 amount, string expenditure);

    constructor(string memory _partnerName) {
        console.log("Deploying ImplementingPartner:", _partnerName);
        partnerName = _partnerName;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function distributeFundsToBeneficiary(
        address payable beneficiary, 
        uint256 amount,
        string memory expenditure
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        console.log("distributeFundsToBeneficiary");
        beneficiary.transfer(amount);
        emit FundsDistributed(beneficiary, amount, expenditure);
    }
}
