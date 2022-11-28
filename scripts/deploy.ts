import { ethers, run } from 'hardhat';

import deployer from '../.secret';

// WKCS address on KCC, WETH address on ETH
const wavaxAddr = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7';

async function main() {
  await run('compile');
  const FlashBot = await ethers.getContractFactory('FlashBot');
  const flashBot = await FlashBot.deploy(wavaxAddr);

  console.log(`FlashBot deployed to ${flashBot.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
