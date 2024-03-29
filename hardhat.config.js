// const { version } = require("hardhat");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  solidity:{compilers:[{version:"0.5.0"},{version:"0.5.16"},{version:"0.6.0"},{version:"0.6.2"},{version:"0.6.6"},{version:"0.8.24"}]}
};
