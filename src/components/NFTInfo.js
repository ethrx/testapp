import {erc721} from 'ethesci';
import {getIpfs, ipfsurl} from './helpers/IPFS.js';
import React from 'react';
import abi from '../assets/abi.json';
const contract = new erc721(
	'https://rpc-mainnet.maticvigil.com/',
	abi,
	'0xa8e8dbcab4ea3ef82db09803132ceb43da743579'
);

import {Accordion, Image} from 'react-bootstrap';

export default class NFTInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: props.address,
			nfts: [],
		};
		this.loadNFTs = this.loadNFTs.bind(this);
    this.loadNFTs();

  }

	async loadNFTs() {
		var token = await contract.getTokens(this.state.address);
		var tokens = [];
		Promise.all(token.map((i) => getIpfs(i['tokenURI']))).then((a) => {
			this.setState({nfts: a});
		});
		//console.log(this.state.nfts);
	}

	render() {
		return (
			<Accordion defaultActiveKey="0">
				{this.state.nfts.map((item, i) => (
					<Accordion.Item eventKey={i} style={{width: '550px'}}>
						<Accordion.Header>{item.name}</Accordion.Header>

						<Accordion.Body
							style={{width: '550px', display: 'flex', flexDirection: 'row'}}
						>
							<Image
								src={ipfsurl(item.image)}
								style={{width: '20%', height: '100%', position: 'relative'}}
							/>
							{item.description}
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		);
	}
}
