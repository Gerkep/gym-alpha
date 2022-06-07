import React from "react";
import { Link } from "react-router-dom";
import "../style/minting.css";
import { NFTContract, provider } from "../ethereum/Contracts";
import { merkleTree } from "../ethereum/Whitelist";
import { ethers } from "ethers";
import { browserName, browserVersion } from "react-device-detect";
class Minting extends React.Component{
    state = {minting: false, minted: 0, error: false};
    
    async componentDidMount(){
        if(browserName==="Chrome" || browserName==="Firefox"){
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const nftContractWithSigner = NFTContract.connect(signer);
            const mintedNFTs = await nftContractWithSigner.getMinted();
            const mintedNFTsNum = await mintedNFTs.toNumber();
            this.setState({minted: mintedNFTsNum});
        }

    }
    mint = async () => {
        if(browserName==="Chrome" || browserName==="Firefox"){
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const nftContractWithSigner = NFTContract.connect(signer);
            const signerAddress = await signer.getAddress();
            const hexproof = merkleTree.getHexProof(signerAddress);
            this.setState({error: false});
            let err = "";
            try{
            this.setState({minting: true});
            await nftContractWithSigner.mintNFT(signerAddress, 1, hexproof, { value: ethers.utils.parseEther("0.01")});
            this.setState({minting: false});
            }catch (e){
                err = e.message;
                console.log(err)
                this.setState({minting: false, error: true});
            }
        }else{alert("You have to use either Chrome or Firefox with Metamask plugin to perform this transaction")}
    }
    render(){
        return(
            <div className="minting-page">
                <div className="mint-sidebar-container">
                    <div className="ga-text"></div>
                    <div className="mint-about">Become a part of the revolution<br></br> and mint yourself a <b className="bold">share on steroids.</b></div>
                    <div className="mint-image mobile"></div>
                    <div className="supply">Minted: {this.state.minted}/5777</div>
                    {this.state.minting ? <button disabled className="button mint-button"><i className="loading-spinner"></i></button> : <button onClick={this.mint} className="button mint-button">MINT</button>}
                    {this.state.error ? <div className="mint-error">Something went wrong...<br></br><p className="error-more">(Check console for more details.)</p></div> : ''}
                </div>
                <div className="mint-image-container desktop">
                    <div className="mint-image"></div>
                </div>
                <div className="ga-corner-logo"></div>
            </div>
        )
    }

}

export default Minting;