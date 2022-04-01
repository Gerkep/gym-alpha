// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

  contract Stakeable is IERC721Receiver{
    ERC721 public parentNFT;

    mapping(uint256 => address) public stakes;//address for NFT index
    mapping(uint256 => uint256) public stakingTime;//staking time for NFT index

    constructor() {
        parentNFT = ERC721(0xEc29164D68c4992cEdd1D386118A47143fdcF142);
    }


    event Staked(address indexed user, uint256 tokenIndex, uint256 timestamp);

    function _stake(uint256 _tokenIndex) public{
        stakes[_tokenIndex] = msg.sender;
        stakingTime[_tokenIndex] = block.timestamp;
        parentNFT.safeTransferFrom(msg.sender, address(this), _tokenIndex);

        emit Staked(msg.sender, _tokenIndex, block.timestamp);
    }

    function unstake(uint256 _tokenIndex) public {
        require(msg.sender == stakes[_tokenIndex]);
        parentNFT.safeTransferFrom(address(this), msg.sender, _tokenIndex);
        uint timestampDifference = (block.timestamp - stakingTime[_tokenIndex]);
        delete stakes[_tokenIndex];
    }

    function onERC721Received(address, address, uint256, bytes memory) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }
    
}