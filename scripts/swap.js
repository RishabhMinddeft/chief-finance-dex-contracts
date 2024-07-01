require('dotenv').config();
const { ethers } = require('hardhat');
const { parseUnits } = ethers;

const UNISWAP_V2_ROUTER_ABI = [
  // Only include the methods we need
  'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline, bool isUni) payable returns (uint[] memory amounts)',
];

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const weth = '0xF771707F18751a644B4066d6818cbe11B96Ea9a3';
  const tokenOutAddress = '0xD904014c93DC3fB6E99f5e2ccD1df6822FcF98d0'; // Replace with your output token address
  const routerAddress = '0x13D317e065C39a2DA9102B12FF75EE19B5EA3c15'; // Replace with the Uniswap V2 router address

  const ethAmount = ethers.utils.parseUnits('0.00001', 'ether'); // Amount of ETH to swap

  // Create an instance of the Uniswap V2 Router contract
  const router = new ethers.Contract(
    routerAddress,
    UNISWAP_V2_ROUTER_ABI,
    deployer
  );
  //   console.log('router', router);
  // Get the minimum amount of output tokens (you can implement a slippage tolerance here)
  //   const amountsOut = await router.getAmountsOut(ethAmount, [
  //     ethers.ZeroAddress,
  //     tokenOutAddress,
  //   ]);
  //   console.log('amountsOut', amountsOut);
  //   const amountOutMin = amountsOut[1].mul(95).div(100); // Set a slippage tolerance of 5%
  //   console.log('amountsOutmin', amountOutMin);

  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from now

  // Perform the ETH to token swap
  const tx = await router.swapExactETHForTokens(
    0,
    [weth, tokenOutAddress],
    deployer.address,
    deadline,
    false,
    {
      value: ethAmount,
    }
  );

  const receipt = await tx.wait();
  console.log('ETH swapped for tokens:', receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });