const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("LocModule", (m) => {
  const address1 = m.getParameter("address1","0x5969Ad5Abb6D9f1A0336579AD094828d4c3D3140");
  

  const lock = m.contract("UniswapV2Factory", [address1,address1], {
    
  });

  return { lock };
});
