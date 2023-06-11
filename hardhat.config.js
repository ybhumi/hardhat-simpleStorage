require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-etherscan")
require("@nomicslabs/hardhat-ethers")
const API_URL="https://eth-sepolia.g.alchemy.com/v2/VcNcia-9elkrAOm_Qfg9nPUY03d_rHOV";
const PRIVATE_KEY ="e8bd900ce779000e386f61e2a57c7728d537b39ce6346e2edde54deb15468325";
const PUBLIC_KEY="0x7693BBD5b08Deb7C83Ab01AaBC0f2794DF1dDFC8";

/** @type import('hardhat/config').HardhatUserConfig */
// const sepoliaUrl=process.env.sepolia_RPC_URL
const private_key = process.env.Private_Key
const API_KEY=process.env.Api_Key
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
   sepolia: {
    url: "https://eth-sepolia.g.alchemy.com/v2/VcNcia-9elkrAOm_Qfg9nPUY03d_rHOV",
    accounts:[private_key],
    },
  },
  solidity: "0.8.18",
  etherscan:{
    apiKey:API_KEY,
  }
};
