// @ts-nocheck
require('dotenv').config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
require('@nomiclabs/hardhat-ethers');
// require('@nomiclabs/hardhat-web3');
const { task } = require('hardhat/config');
const ERC20_ABI = require('./erc20abi.json');

task('fund', 'Funds the specified wallet with MKR and ETH')
  .addParam('address', 'The address to fund')
  .setAction(async taskArgs => {
    const address = taskArgs.address;

    if (!address) {
      console.log('Missing address parameter. Please, add "--address ADDRESS" at the end of your command');
      return;
    }
    const addressWithMKR = '0xf977814e90da44bfa03b6295a0616a897441acec';
    const addressWithETH = '0xf977814e90da44bfa03b6295a0616a897441acec';
    const addressWithDAI = '0xf977814e90da44bfa03b6295a0616a897441acec';
    const addressWithstETH = '0x3c79d7e8a5d6b49336f0fd2f3adde745954bc9f7';

    // Tokens
    const mkrAddress = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2';
    const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
    const stETHAddress = '0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d';

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithMKR]
    });

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithstETH]
    });

    // Send 100 ETH to configured address
    const ethSender = await ethers.getSigner(addressWithETH);

    await ethSender.sendTransaction({
      to: address,
      value: ethers.utils.parseEther('100')
    });

    console.log(
      `Test address ${address} ETH balance is now:`,
      ethers.utils.formatEther(await ethers.provider.getBalance(address))
    );

    // Send MKR
    const mkrSender = await ethers.getSigner(addressWithMKR);

    const mkrToken = new ethers.Contract(mkrAddress, ERC20_ABI, mkrSender);

    await mkrToken.transfer(address, ethers.utils.parseEther('100'));

    console.log(`Test address ${address} funded with 100 MKR`);

    // Send DAI
    const daiSender = await ethers.getSigner(addressWithDAI);

    const daiToken = new ethers.Contract(daiAddress, ERC20_ABI, daiSender);

    await daiToken.transfer(address, ethers.utils.parseEther('10000'));

    console.log(`Test address ${address} funded with 10000 DAI`);

    // Send stETH
    const stETHSender = await ethers.getSigner(addressWithstETH);

    const stETHToken = new ethers.Contract(stETHAddress, ERC20_ABI, stETHSender);

    await stETHToken.transfer(address, ethers.utils.parseEther('100'));

    console.log(`Test address ${address} funded with 100 stETH`);
  });
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.TESTNET_ALCHEMY_KEY}`,
        blockNumber: 16132122,
        chainId: 1
      },
      timeout: 2000000
    }
  }
};
