import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import React from "react";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Cards, Modal, Paginate, Searchbar } from "../components";
import { handleImage, searchMovies, trendingMovies } from "../controllers";

const Browse = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [page, setPage] = useState(1);
	const [allPages, setAllPages] = useState(0);
	const [searching, setSearching] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [dataOnClick, setDataOnClick] = useState({});

	const handleSearch = () => {
		searchMovies(searchQuery, 1).then((data) => {
			setSearchResults(data.results);
			setAllPages(data.total_pages);
			setSearching(true);
		});
	};

	useEffect(() => {
		if (searching) {
			searchMovies(searchQuery, page).then((data) => {
				setSearchResults(data.results);
				setAllPages(data.total_pages);
			});
		} else {
			trendingMovies(page, "week").then((data) => {
				setSearchResults(data.results);
			});
		}
	}, [page, searchQuery, searching]);

	const handlePagination = () => {
		if (searching) {
			return <Paginate setPage={setPage} pages={allPages} />;
		} else {
			return <Paginate setPage={setPage} />;
		}
	};
	const handleClear = () => {
		setSearchQuery("");
	};

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
					value={searchQuery}
					handleChange={setSearchQuery}
					onSearch={handleSearch}
					onClear={handleClear}
				/>
			</Box>
			<Box
				style={{
					display: "flex",
					margin: "3vh 2vw",
				}}
			>
				<ScrollToTop smooth component={<KeyboardArrowUpRoundedIcon />} />
				<Grid sx={{ flexGrow: 1 }} container spacing={2}>
					{searchResults.map((result) => {
						return (
							<Grid item xs={4} sm={3} md={2} key={result.id}>
								<Cards
									altText={result.original_title}
									image={handleImage(result.poster_path)}
									title={result.title}
									id={result.id}
									handleModalOpen={() => {
										setDataOnClick(result);
										setModalOpen(true);
									}}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Modal data={dataOnClick} open={modalOpen} setOpen={setModalOpen} />
			<Box>{handlePagination()}</Box>
		</Box>
	);
};

export default Browse;
