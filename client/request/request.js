// imports
import axios from 'axios';

// request
const request = method => async({
	url = process.env.REACT_APP_DATABASE_URL, 
	endpoint, 
	body,
	params,
}) => {
	// console.log('THE METHOD', method)
	// console.log('THE URL', url)
	// console.log('THE ENDPOINT', endpoint)
	// console.log('THE BODY', body)

	// set headers
	const headers = {
		'Content-Type': 'application/json'
	};

	// prepare url
	let uri = `${url}`;
	if (endpoint) uri = `${uri}/${endpoint}`;
	if (params) uri = `${uri}?${params}`;

	// send request
	return await axios({
		method: method,
		headers: headers,
		url: uri,
		data: body
	}).then(res => res.data);
};

export const get = request('GET');
export const post = request('POST');
export const put = request('PUT');
export const del = request('DELETE');