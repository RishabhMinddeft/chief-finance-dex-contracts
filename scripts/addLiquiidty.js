require('dotenv').config();
const { ethers } = require('hardhat');
const { parseUnits } = ethers;

const UNISWAP_V2_ROUTER_ABI = [
  // Only include the methods we need
  'function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin, address to, uint deadline) payable returns (uint amountToken, uint amountETH, uint liquidity)',
];
const Token_Approve_ABI = [
  'function approve(address routerAddress, uint256 tokenDesired) returns (bool)',
];
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const tokenAddress = '0xD904014c93DC3fB6E99f5e2ccD1df6822FcF98d0'; // Replace with your token address
  const routerAddress = '0x13D317e065C39a2DA9102B12FF75EE19B5EA3c15'; // Replace with the Uniswap V2 router address

  const tokenAmount = ethers.utils.parseUnits('10', 18); // Amount of tokens to add as liquidity
  const ethAmount = ethers.utils.parseUnits('0.01', 18); // Amount of ETH to add as liquidity

  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

  //   const token = await ethers.getContractAt('IERC20', tokenAddress);

  const token = new ethers.Contract(tokenAddress, Token_Approve_ABI, deployer);
  const router = new ethers.Contract(
    routerAddress,
    UNISWAP_V2_ROUTER_ABI,
    deployer
  );

  // Approve the router to spend your tokens
  const approvalTx = await token.approve(routerAddress, tokenAmount);
  await approvalTx.wait();
  console.log('Approved router to spend tokens');

  // Add liquidity
  const tx = await router.addLiquidityETH(
    tokenAddress,
    tokenAmount,
    tokenAmount,
    ethAmount,
    deployer.address,
    deadline,
    {
      value: ethAmount,
    }
  );

  const receipt = await tx.wait();
  console.log('Liquidity added:', receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });