import { task, HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';

import deployer from './.secret';

// const KCC_RPC = 'https://127.0.0.1:8545/';
const avalancheMainnet = 'https://api.avax.network/ext/bc/C/rpc';
const avalancheFuji = 'https://api.avax-test.network/ext/bc/C/rpc';
// const avalancheFork = 'https://avalanche-mainnet.infura.io/v3/a11908c0f4dc461381e780261e681154';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 43114,
      gasPrice: 225000000000,
      forking: {
          url: "https://api.avax.network/ext/bc/C/rpc",
          enabled: true,
      },
      accounts: {
        accountsBalance: '1000000000000000000000000', // 1 mil ether
      },
    },
    fuji: {
      url: avalancheFuji,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [deployer.private],
    },
    mainnet: {
      url: avalancheMainnet,
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [deployer.private],
    },
  },
  // mocha: {
  //   timeout: 40000,
  // },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = config;
