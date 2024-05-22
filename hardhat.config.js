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
    // "apiKey" : 
    //    "5SF1UVF68KSRPMM35NZTEJF8YPV4EIF12I"
    apiKey: {
      amoy: "5UIIDB1ZYSCJIRF83EY291N3KHUR96VV76",
      fantom : "UVC45U4BF9TNRIAZ9WT7TUHW4KWDKEGQWP"
    
  },
  customChains: [
    {
      network: "amoy",
      chainId: 80002,
      urls: {
        apiURL: "https://api-amoy.polygonscan.com/api",
        browserURL: "https://amoy.polygonscan.com/"
      }
    },
    {
      network: "fantom",
      chainId: 4002,
      urls: {
        apiURL: "https://api-testnet.ftmscan.com/api",
        browserURL: "https://testnet.ftmscan.com/"
      }
    }

  ]
},
  networks :{
    goerli : {
      url:"https://eth-goerli.g.alchemy.com/v2/FItuEVKk0qJoFriqWlGBqTe3D1pzZy-9",
      accounts:[PRIVATE_KEY],
      gas : 400000000000000
    
      
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/YVEZdAA5ZWLTjpXiP5vqmtKw2OkHGo1L",
      accounts:[PRIVATE_KEY],
      gas : 400000000000000

    },
    fantom :{
      url: "https://fantom-testnet-rpc.publicnode.com",
      accounts:[PRIVATE_KEY],
      gas : 400000000000000


    },
    bsc: {
      url: "https://palpable-green-glitter.bsc-testnet.quiknode.pro/6d309f42f6fc1345b38b38e480512671291983f0/",
      
      accounts: [PRIVATE_KEY],
      gas: 4000000000000000,
      gasPrice: 35000000000,
      saveDeployments: true,


    },
    mumbai : {
      url:"https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      accounts:[PRIVATE_KEY],
      gas : 400000000000000
    
      
    },
    amoy :{
      url : "https://80002.rpc.thirdweb.com",
      accounts : [PRIVATE_KEY],
      gas : 400000000000000,
      gasPrice: 35000000000,
      
      
    }
  }
};

