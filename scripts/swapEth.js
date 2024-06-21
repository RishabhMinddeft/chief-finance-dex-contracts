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

  const weth = '0x2B8Aa9Bc15870A79DEf1cD4A3182287B08AcE30A';
  const tokenOutAddress = '0x9BED7e1B07be88894bBf599b50E8189C55b0a888'; // Replace with your output token address
  const routerAddress = '0x4cd93352D611BeDaC1E28c7C68d8BB52E35eA104'; // Replace with the Uniswap V2 router address

  const ethAmount = parseUnits('0.00001', 'ether'); // Amount of ETH to swap

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
