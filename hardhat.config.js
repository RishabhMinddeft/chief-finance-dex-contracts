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
      amoy: "5UIIDB1ZYSCJIRF83EY291N3KHUR96VV76"
    
  },
  customChains: [
    {
      network: "gArbitrium",
      chainId: 421614,
      urls: {
        apiURL: "https://api-amoy.polygonscan.com/api",
        browserURL: "https://amoy.polygonscan.com/"
      }
    }
  ]
},
  networks :{
    gArbitrium :{
      url : "https://sepolia-rollup.arbitrum.io/rpc",
      accounts : [PRIVATE_KEY],
      gas : 400000000000000,
      gasPrice: 35000000000,
    }
  }
};

