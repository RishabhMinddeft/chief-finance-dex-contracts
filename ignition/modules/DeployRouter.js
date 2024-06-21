const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('LocModule', (m) => {
  const address1 = m.getParameter(
    'address1',
    '0x8D5F686e8d3F91678a8E2F3B327eFD8533567146'
  );

  const router = m.contract('SwapRouterV2', [
    '0x4370963Dd8295d4BF309d8541CC8a5062222dE2f',
    '0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008',
    '0x2B8Aa9Bc15870A79DEf1cD4A3182287B08AcE30A',
  ]);

  return { router };
});
