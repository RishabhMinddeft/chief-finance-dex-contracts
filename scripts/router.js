// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const buy_coffee = await ethers.getContractFactory("SwapRouterV2");
  const deploy_coffee = await buy_coffee.deploy("0xA71c86AFcA1a61c7b1449e230d70C3182E82A7c7","0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc","0xCFbE3AA58eA0E2EFeF56abaF6Aa649AfADa44CA7");
  await deploy_coffee.deployed();
  console.log(deploy_coffee.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// //0x5FbDB2315678afecb367f032d93F642f64180aa3