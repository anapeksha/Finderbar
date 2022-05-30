import { Box, Grid } from "@mui/material";
import React from "react";
import Cards from "../components/Cards";
import Searchbar from "../components/Searchbar";

const Browse = () => {
	const arr = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
	];
	return (
		<div>
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "70px",
				}}
			>
				<Searchbar />
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
					spacing={1}
					style={{ overflow: "auto" }}
				>
					{arr.map((a) => {
						return (
							<Grid item xs={6} sm={4} md={3}>
								<Cards />
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
};

export default Browse;
