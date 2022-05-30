import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomIconButton, Wrapper } from "../styles";

const Home = () => {
	const [animate, setAnimation] = useState({
		text: "animate__animated animate__fadeInDownBig animate__slow",
		button: "animate__animated animate__bounceInLeft animate__delay-2s",
	});
	const navigate = useNavigate();
	const handleClick = () => {
		setAnimation({
			text: "animate__animated animate__fadeOutDownBig animate__slow animate__delay-1s",
			button: "animate__animated animate__bounceOutRight",
		});
		setTimeout(() => {
			navigate("browse");
		}, 1750);
	};
	return (
		<Wrapper>
			<Box className={animate.text} style={{ color: "#c9cfcf" }}>
				<Typography variant="h4" style={{ textAlign: "center" }}>
					Welcome to Finderbar
				</Typography>
				<Typography variant="h6" style={{ textAlign: "center" }}>
					Click here to continue
				</Typography>
			</Box>
			<Box className={animate.button}>
				<CustomIconButton edge="start" onClick={handleClick}>
					<ArrowForwardIcon fontSize="medium" />
				</CustomIconButton>
			</Box>
		</Wrapper>
	);
};

export default Home;
