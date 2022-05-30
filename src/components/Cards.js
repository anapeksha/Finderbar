import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import * as React from "react";

const Cards = (props) => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				minHeight: 300,
				maxHeight: 300,
				backgroundColor: "#1a1e25",
				color: "white",
			}}
			className="animate__animated animate__fadeIn animate__slow"
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					style={{ objectFit: "contain" }}
					image={props.image}
					alt={props.altText}
				/>
			</CardActionArea>
			<CardContent>
				<Typography
					gutterBottom
					variant="overline"
					display="block"
					component="div"
				>
					{props.title}
				</Typography>
				<Typography variant="body2">{props.description}</Typography>
			</CardContent>
		</Card>
	);
};

export default Cards;
