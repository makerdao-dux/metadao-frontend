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
    const addressWithETH = '0x07b23ec6aedf011114d3ab6027d69b561a2f635e';
    const addressWithDAI = '0x07b23ec6aedf011114d3ab6027d69b561a2f635e';
    const addressWithstETH = '0xbb0b4642492b275F154e415fc52Dacc931103fD9';

    // Tokens
    const daiAddress = '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1';
    const stETHAddress = '0xbb0b4642492b275F154e415fc52Dacc931103fD9';

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithETH]
    });

    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [addressWithstETH]
    });

    // Send 50 ETH to configured address

    const ethSender = await ethers.getSigner(addressWithETH);

    await ethSender.sendTransaction({
      to: address,
      value: ethers.utils.parseEther('50')
    });

    console.log(
      `Test address ${address} ETH balance is now:`,
      ethers.utils.formatEther(await ethers.provider.getBalance(address))
    );



    // Send DAI
    const daiSender = await ethers.getSigner(addressWithDAI);

    const daiToken = new ethers.Contract(daiAddress, ERC20_ABI, daiSender);

    await daiToken.transfer(address, ethers.utils.parseEther('10000'));

    console.log(`Test address ${address} funded with 10000 DAI`);

    // Send stETH
    const stETHSender = await ethers.getSigner(addressWithstETH);

    const stETHToken = new ethers.Contract(stETHAddress, ERC20_ABI, stETHSender);

    await stETHToken.transfer(address, ethers.utils.parseEther('40'));

    console.log(`Test address ${address} funded with 40 stETH`);
  });
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: `https://arb-mainnet.g.alchemy.com/v2/${process.env.TESTNET_ALCHEMY_KEY}`,
        blockNumber: 44589488,
        chainId: 42161
      },
      timeout: 2000000
    }
  }
};
