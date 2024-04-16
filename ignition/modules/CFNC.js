const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("CFNC", (m) => {
  const address1 = m.getParameter("address1","0x2397gewhdo378dguo1hejhdvjhwd");
  

  const lock = m.contract("CFNC", ["1000000000000000000000000000000"], {
    
  });

  return { lock };
});
