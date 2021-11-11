import { erc721 } from "ethesci";
import ipfsurl from "./helpers/IPFS.js";
import React from "react";
import abi from "../assets/abi.json";
const contract = new erc721(
  "https://rpc-mainnet.maticvigil.com/",
  abi,
  "0xa8e8dbcab4ea3ef82db09803132ceb43da743579"
);


export default class NFTInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      address: props.address,
      nfts: []
    }
    this.loadNFTs = this.loadNFTs.bind(this)
  }
  componentDidMount(){
    this.loadNFTs()
  }
  async loadNFTs() {
    var token = await contract.getTokens(this.state.address)
    var tokens = []
    console.log(this.state.nfts)

    token.forEach((i) => {
      tokens.push(ipfsurl(i["tokenURI"]))
    })
    await this.setState({
      nfts: tokens
    })
  }
  
  render() {
    return <div>{this.state.nfts}</div>;
  }
}
