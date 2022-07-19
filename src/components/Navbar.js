import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import {
	AppBar,
	Box,
	Breadcrumbs,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CustomLink } from "../styles";
import React from "react";

const Navbar = () => {
	const navigate = useNavigate();

	const breadcrumbs = [
		<CustomLink to="/Finderbar" key={1}>
			Home
		</CustomLink>,
		<CustomLink to="/Finderbar/trending" key={2}>
			Trending
		</CustomLink>,
		<CustomLink to="/Finderbar/browse" key={3}>
			Browse
		</CustomLink>,
	];
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				style={{
					backgroundColor: "#161b22",
					boxShadow:
						"rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
				}}
			>
				<Toolbar>
					<IconButton
						edge="start"
						aria-label="icon"
						onClick={() => navigate("/Finderbar")}
					>
						<TheaterComedyIcon fontSize="large" style={{ color: "#A9A9A9" }} />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link
							to="/Finderbar"
							style={{ textDecoration: "none", color: "#A9A9A9" }}
						>
							Finderbar
						</Link>
					</Typography>
					<Stack spacing={2}>
						<Breadcrumbs separator="">{breadcrumbs}</Breadcrumbs>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
