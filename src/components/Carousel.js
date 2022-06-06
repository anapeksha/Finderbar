import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { handleCredits, handleImage } from "../controllers";

const Carousel = (props) => {
	const [credits, setCredits] = useState([]);

	const handleDragStart = (e) => e.preventDefault();

	useEffect(() => {
		handleCredits(props.id).then((data) => {
			setCredits(data.cast);
		});
	}, []);

	const items = credits.map((credit) => (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				objectFit: "contain",
				padding: "20px",
			}}
		>
			<img
				src={handleImage(credit.profile_path)}
				alt={credit?.name}
				onDragStart={handleDragStart}
				style={{
					borderRadius: "10px",
					marginBottom: "5px",
					boxShadow: "0px 0px 5px black",
				}}
			/>
			<Typography>{credit.name}</Typography>
		</Box>
	));

	const responsive = {
		0: {
			items: 3,
		},
		512: {
			items: 5,
		},
		1024: {
			items: 7,
		},
	};

	return (
		<AliceCarousel
			mouseTracking
			infinite
			disableDotsControls
			disableButtonsControls
			responsive={responsive}
			items={items}
			autoPlay
		/>
	);
};

export default Carousel;
