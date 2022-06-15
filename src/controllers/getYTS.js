import axios from "axios";

const getYTS = (query) => {
	return axios(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`, {
		method: "GET",
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
};

export default getYTS;
