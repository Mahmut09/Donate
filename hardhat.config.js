/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const rinkeby_PRIVATE_KEY = "bc390e19915b77368091cf54e02d36d3e93142443a24769f48a698f63ba6ce0b";

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
 //require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.7.3",

  networks: {
    rinkeby: {
      url: "https://mainnet.infura.io/v3/54a940df53984540bcacdc04144a630c",
      accounts: [ `${rinkeby_PRIVATE_KEY}` ],
    },
  },
};
