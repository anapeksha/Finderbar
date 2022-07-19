import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Cards, Modal } from "../components";
import { handleImage, trendingMovies } from "../controllers";

const Trending = () => {
	const [trending, setTrending] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [dataonClick, setDataonClick] = useState({});

	useEffect(() => {
		trendingMovies(1, "day").then((data) => {
			setTrending(data.results);
		});
	}, []);

	return (
		<Box
			style={{
				display: "flex",
				margin: "3vh 2vw",
				marginTop: "90px",
				flexDirection: "column",
			}}
		>
			<Box
				style={{ display: "flex", justifyContent: "center", color: "#c9cfcf" }}
			>
				<Typography
					variant="h4"
					gutterBottom
					className="animate__animated animate__fadeIn animate__fast"
				>
					Trending for the day
				</Typography>
			</Box>
			<Box
				style={{
					display: "flex",
					margin: "3vh 2vw",
				}}
			>
				<ScrollToTop smooth component={<KeyboardArrowUpRoundedIcon />} />
				<Grid sx={{ flexGrow: 1 }} container spacing={2}>
					{trending.map((result) => {
						return (
							<Grid item xs={4} sm={3} md={2} key={result.id}>
								<Cards
									altText={result.original_title}
									image={handleImage(result.poster_path)}
									title={result.title}
									id={result.id}
									handleModalOpen={() => {
										setDataonClick(result);
										setModalOpen(true);
									}}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Modal data={dataonClick} open={modalOpen} setOpen={setModalOpen} />
		</Box>
	);
};

export default Trending;
