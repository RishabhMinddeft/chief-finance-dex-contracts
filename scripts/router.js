// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const ROUTER_CONTRACT = await ethers.getContractFactory("SwapRouterV2");
  const ROUTER_CONTRACT_DEPLOYED = await ROUTER_CONTRACT.deploy("0x4cd93352D611BeDaC1E28c7C68d8BB52E35eA104","0x4cd93352D611BeDaC1E28c7C68d8BB52E35eA104","0xF05d5519A45C6D877B7D86B8bA89A6Af0F875360");
  await ROUTER_CONTRACT_DEPLOYED.deployed();
  console.log(ROUTER_CONTRACT_DEPLOYED.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// //0x5FbDB2315678afecb367f032d93F642f64180aa3