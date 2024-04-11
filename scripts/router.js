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
  const ROUTER_CONTRACT_DEPLOYED = await ROUTER_CONTRACT.deploy("0x0f2ce8eE8Ac81687976EdF8D0C10D2576F6D85A4","0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc","0xE24C1EF9D4013174CD55c236870458d55434fefA");
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