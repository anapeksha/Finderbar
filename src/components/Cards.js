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
				height: 320,
				backgroundColor: "#1a1e25",
				color: "whitesmoke",
			}}
			className="animate__animated animate__fadeIn animate__slower"
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
					fontSize="9px"
					display="block"
					component="div"
					className="card-text"
				>
					{props.title}
				</Typography>
				<Typography variant="body2">{props.description}</Typography>
			</CardContent>
		</Card>
	);
};

export default Cards;
