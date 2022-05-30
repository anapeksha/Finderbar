import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Searchbar from "../components/Searchbar";
import searchMovies from "../controllers/searchMovies";
import trendingMovies from "../controllers/trendingMovies";
import handleImage from "../controllers/handleImage";

const Browse = () => {
	const [search, setSearch] = useState("");

	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = () => {
		searchMovies(search).then((data) => {
			console.log(data);
			setSearchResults(data.results);
		});
	};

	useEffect(() => {
		trendingMovies().then((data) => {
			setSearchResults(data.results);
		});
	}, []);

	return (
		<div>
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "90px",
				}}
			>
				<Searchbar
					value={search}
					handleChange={setSearch}
					onSearch={handleSearch}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					margin: "3vh 2vw",
					maxHeight: "77vh",
				}}
			>
				<Grid
					sx={{ flexGrow: 1 }}
					container
					spacing={3}
					style={{ overflow: "auto" }}
				>
					{searchResults.map((result) => {
						return (
							<Grid item xs={6} sm={4} md={3}>
								<Cards
									altText={result.original_title}
									image={handleImage(result.poster_path)}
									title={result.title}
									key={result.id}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
};

export default Browse;
