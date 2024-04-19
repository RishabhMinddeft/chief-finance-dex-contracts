// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  console.log("test");
  const WMATIC_CONTRACT = await ethers.getContractFactory("WMATIC");
  console.log("test2");
  const WMATIC_DEPLOYED = await WMATIC_CONTRACT.deploy();
  console.log("test3");
  await WMATIC_DEPLOYED.deployed();
  console.log("test4");
  console.log(WMATIC_DEPLOYED.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

