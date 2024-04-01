// const { version } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

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
    } }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000,
      },
    }
  },
  allowUnlimitedContractSize: true,
  etherscan: {
    "apiKey":
      "BD5NNA18K4YEI2RIR2JSKM6GXDFWDAFGXF"

  },
  networks: {
    bsc: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: ["2305481b90c24d22ff932a5f79668844a44e10b5ab2ad38e3393aa594dca4448"],
      gas: 4000000000000000,
      gasPrice: 35000000000,
      saveDeployments: true,


    },
    mumbai : {
      url:"https://polygon-mumbai.g.alchemy.com/v2/hML_HRNy_LEP9hIU3JkDgpnw0eVcM6hV",
      accounts:["2305481b90c24d22ff932a5f79668844a44e10b5ab2ad38e3393aa594dca4448"],
      gas : 400000000000000
    
      
    }
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};
