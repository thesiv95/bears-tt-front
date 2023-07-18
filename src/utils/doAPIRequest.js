import axios from "axios";

const doAPIRequest = async (path, method = 'get') => {
	try {
		const baseURL = process.env.REACT_APP_BACKEND_URL;
		const response = await axios.request({
			url: baseURL + path,
			method: method.toLowerCase()
		})

		const responseData = response.data;

		if (responseData.isSuccess) {
			return responseData.data;
		} else {
			throw responseData.message; // error message
		}
	} catch (error) {
		throw error;
	}
}

export default doAPIRequest;