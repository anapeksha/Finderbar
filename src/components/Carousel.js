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
			<Box
				component="img"
				src={handleImage(credit.profile_path)}
				alt={credit?.name}
				onDragStart={handleDragStart}
				style={{
					borderRadius: "5px",
					marginBottom: "5px",
					objectFit: "contain",
					boxShadow:
						"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
					width: "65px",
					height: "90px",
				}}
			/>
			<Typography variant="caption">{credit.name}</Typography>
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
