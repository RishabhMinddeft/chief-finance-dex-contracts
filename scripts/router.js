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
  const ROUTER_CONTRACT_DEPLOYED = await ROUTER_CONTRACT.deploy("0x448e31F4682eE1bbF36aDF44cC38f7C9d84fd262","0x448e31F4682eE1bbF36aDF44cC38f7C9d84fd262","0xa1012EE0BEE96dcbC08267Fc35E6B06E64E4AC45");
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