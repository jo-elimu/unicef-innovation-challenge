//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * This smart contract holds the funds sent from UNICEF to an Implementing Partner (IP).
 */
contract ImplementingPartner is AccessControl {

    constructor() {
        console.log("Deploying ImplementingPartner");
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
}
