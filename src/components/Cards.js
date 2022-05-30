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
				backgroundColor: "#1a1e25",
				color: "white",
			}}
			className="animate__animated animate__fadeIn animate__slow"
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Cards;
