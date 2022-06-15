import axios from "axios";
import { API_KEY } from "../uri";

const getIMDB = (id) => {
	return axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {
		method: "GET",
	}).then((response) => {
		return response.data;
	});
};

export default getIMDB;
