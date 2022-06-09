import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import { Buffer } from 'buffer';

window.Buffer = Buffer;
export let whitelistAddresses = [
    "0xf1466885C60c3b09739c71a305b84b6eC6021421"
]
export const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
export const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });