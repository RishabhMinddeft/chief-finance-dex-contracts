// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const FACTORY_CONTRACT = await ethers.getContractFactory("UniswapV2Factory");
  const FACTORY_CONTRACT_DEPLOYED = await FACTORY_CONTRACT.deploy("0x8D5F686e8d3F91678a8E2F3B327eFD8533567146","0x8D5F686e8d3F91678a8E2F3B327eFD8533567146");
  await FACTORY_CONTRACT_DEPLOYED.deployed();
  console.log(FACTORY_CONTRACT_DEPLOYED.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

