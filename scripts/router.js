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
  const ROUTER_CONTRACT_DEPLOYED = await ROUTER_CONTRACT.deploy("0xa1749f0f055c6b85e600B1303DF4EBDCB3fc9635","0xa1749f0f055c6b85e600B1303DF4EBDCB3fc9635","0x01805a841ece00cf680996bf4b4e21746c68fd4e");
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