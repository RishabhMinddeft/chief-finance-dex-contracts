require('dotenv').config();
const { ethers } = require('hardhat');
const { parseUnits } = ethers.utils;

const UNISWAP_V2_ROUTER_ABI = [
  // Only include the methods we need
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) returns (uint[] memory amounts)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
];

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const tokenInAddress = 'YOUR_TOKEN_IN_ADDRESS'; // Replace with your input token address
  const tokenOutAddress = 'YOUR_TOKEN_OUT_ADDRESS'; // Replace with your output token address
  const routerAddress = 'YOUR_ROUTER_ADDRESS'; // Replace with the Uniswap V2 router address

  const amountIn = parseUnits('1.0', 18); // Amount of input tokens to swap

  // Get an instance of the input token contract
  const tokenIn = await ethers.getContractAt(
    'IERC20',
    tokenInAddress,
    deployer
  );

  // Create an instance of the Uniswap V2 Router contract
  const router = new ethers.Contract(
    routerAddress,
    UNISWAP_V2_ROUTER_ABI,
    deployer
  );

  // Approve the router to spend your input tokens
  const approvalTx = await tokenIn.approve(routerAddress, amountIn);
  await approvalTx.wait();
  console.log('Approved router to spend input tokens');

  // Get the minimum amount of output tokens (you can implement a slippage tolerance here)
  const amountsOut = await router.getAmountsOut(amountIn, [
    tokenInAddress,
    tokenOutAddress,
  ]);
  const amountOutMin = amountsOut[1].mul(95).div(100); // Set a slippage tolerance of 5%

  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

  // Perform the token swap
  const tx = await router.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    [tokenInAddress, tokenOutAddress],
    deployer.address,
    deadline
  );

  const receipt = await tx.wait();
  console.log('Tokens swapped:', receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
