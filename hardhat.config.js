/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('@nomiclabs/hardhat-waffle');
const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim() || '01234567890123456789';
const alchemyId = fs.readFileSync('.alchemyid').toString().trim() || '';
require('dotenv').config();

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // Alchemy
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyId}`,
      accounts: [privateKey],
    },
    matic: {
      // Alchemy
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
