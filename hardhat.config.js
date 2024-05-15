require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const api_url = process.env.api_url;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{ version: "0.5.0",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.5.16",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.6.0",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.6.2",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.6.6",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.8.24",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }, { version: "0.7.6",settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    } }
  ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    },
  },
  allowUnlimitedContractSize: true,
  etherscan: {
    apiKey: {
      sepoliaArbitrium: "U8SZWYCEVUCUESBVRHGXK3WN14XE8FXWGE"
    
  },
  customChains: [
    {
      network: "sepoliaArbitrium",
      chainId: 421614,
      urls: {
        apiURL: "https://api-goerli.arbiscan.io/api",
        browserURL: "https://sepolia.arbiscan.io/"
      }
    }
  ]
},
  networks :{
    sepoliaArbitrium :{
      url : "https://sepolia-rollup.arbitrum.io/rpc",
      accounts : [PRIVATE_KEY],
      gas : 400000000000000,
      gasPrice: 35000000000,
    }
  }
};

