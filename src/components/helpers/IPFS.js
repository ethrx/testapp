const axios = require('axios');

export function ipfsurl(url) {
	return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
}
export async function getIpfs(url) {
	if (url.includes('ipfs://')) {
		url = ipfsurl(url);
	}
	const response = await axios.get(url);
	return response.data;
}
