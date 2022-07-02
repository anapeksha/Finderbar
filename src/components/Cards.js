import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const Cards = (props) => {
	return (
		<Card
			sx={{
				maxWidth: 345,
				height: 320,
				backgroundColor: "#1a1e25",
				color: "whitesmoke",
				boxShadow:
					"rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px",
			}}
			className="animate__animated animate__fadeIn animate__slower"
		>
			<CardActionArea onClick={props.handleModalOpen}>
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
					textAlign="center"
				>
					{props.title}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Cards;
