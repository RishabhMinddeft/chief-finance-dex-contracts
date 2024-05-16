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
      arbitrumSepolia: "U8SZWYCEVUCUESBVRHGXK3WN14XE8FXWGE"
    
  },
},
  networks :{
    sepoliaArbitrium :{
      url : "https://arbitrum-sepolia.infura.io/v3/6a862ce0da644115ad4e2f4696516800",
      accounts : [PRIVATE_KEY],
    }
  }
};

