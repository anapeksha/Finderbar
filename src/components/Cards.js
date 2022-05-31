import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import * as React from "react";
import "../styles/card.css";

const Cards = (props) => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				backgroundColor: "#1a1e25",
				color: "whitesmoke",
			}}
			className="animate__animated animate__fadeIn animate__slow card"
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
