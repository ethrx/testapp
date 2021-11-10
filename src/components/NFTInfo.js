import { erc721 } from "ethesci";
import abi from "../assets/abi.json";
const contract = new erc721(
  "https://rpc-mainnet.maticvigil.com/",
  abi,
  "0xa8e8dbcab4ea3ef82db09803132ceb43da743579"
);
console.log(contract);

export default class NFTInfo {
  render() {
    return <div></div>;
  }
}
