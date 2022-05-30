import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Paginate from "../components/Paginate";
import Searchbar from "../components/Searchbar";
import handleImage from "../controllers/handleImage";
import searchMovies from "../controllers/searchMovies";
import trendingMovies from "../controllers/trendingMovies";

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
		<Box style={{ display: "flex", flexDirection: "column" }}>
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
					maxHeight: "70vh",
				}}
			>
				<Grid
					sx={{ flexGrow: 1 }}
					container
					spacing={1.5}
					style={{ overflow: "auto" }}
				>
					{searchResults.map((result) => {
						return (
							<Grid item xs={4} sm={3} md={2} key={result.id}>
								<Cards
									altText={result.original_title}
									image={handleImage(result.poster_path)}
									title={result.title}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Box>
				<Paginate />
			</Box>
		</Box>
	);
};

export default Browse;
