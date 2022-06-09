import NFTABI from "./abis/NFTABI";
import DAOABI from "./abis/DAOABI";
import StakingABI from "./abis/StakingABI";
import { ethers } from "ethers";
import { browserName, browserVersion } from "react-device-detect";



export const provider =  (browserName === "Chrome") ? new ethers.providers.Web3Provider(window.ethereum) : ethers.getDefaultProvider();
export const NFTContract = new ethers.Contract("0xFB757961C9Ec3151c0832eE80b4cB1868b1AaEf2", NFTABI, provider);
export const StakingContract = new ethers.Contract("0x8d766F0aa5714fBEDbd6a39735e76F0e8F770fE5", StakingABI, provider)
export const DAOContract = new ethers.Contract("0x4170E749A7E963DeE360b119b4A9B52d312C41d6", DAOABI, provider)
