import Vue from 'vue';
import axios from 'axios';

export default {
	register (data) {
		return axios.post(`http://localhost:3333/api/v1/auth/register`, data)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	login (data) {
		return axios.post(`http://localhost:3333/api/v1/auth/login`, data)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	// authenticate () {
	// 	return axios.get(`https://expressapi.ryanknights.co.uk/api/authenticate`)
	// 		.then(response => response.data)
	// 		.catch(error => Promise.reject(error.response));
	// },
	// refresh (token) {
	// 	return axios.post('https://expressapi.ryanknights.co.uk/api/authenticate/refreshToken', { token: token })
	// 	  .then(response => response.data)
	// 	  .catch(error => Promise.reject(error.response));
	// }
}