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
    const addressWithOP = '0xc66825C5c04b3c2CcD536d626934E16248A63f68';
    const addressWithDAI = '0xc66825C5c04b3c2CcD536d626934E16248A63f68';
    const addressWithstETH = '0x56aa33f20E25bAA99E916c91ABB4F59ae72491e0';
    // Tokens
    const opAddress = '0x4200000000000000000000000000000000000042';
    const daiAddress = '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1';
    const stETHAddress = '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb';

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithOP]
    });

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithstETH]
    });

    // Send some ETH to configured address
    const ethSender = await ethers.getSigner(addressWithOP);

    await ethSender.sendTransaction({
      to: address,
      value: ethers.utils.parseEther('0.1')
    });

    console.log(
      `Test address ${address} ETH balance is now:`,
      ethers.utils.formatEther(await ethers.provider.getBalance(address))
    );

    // Send OP
    const opSender = await ethers.getSigner(addressWithOP);

    const opToken = new ethers.Contract(opAddress, ERC20_ABI, opSender);

    await opToken.transfer(address, ethers.utils.parseEther('1000'));

    console.log(`Test address ${address} funded with 1000 OP`);

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
        url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.TESTNET_ALCHEMY_KEY}`,
        blockNumber: 16132122,
        chainId: 10
      },
      timeout: 2000000
    }
  }
};
