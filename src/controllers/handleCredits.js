import axios from "axios";
import { API_KEY } from "../uri";

const handleCredits = (id) => {
	return axios(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
		{
			method: "GET",
		}
	).then((response) => {
		return response.data;
	});
};

export default handleCredits;
