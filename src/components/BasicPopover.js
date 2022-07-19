import {
	createTheme,
	Divider,
	Link,
	Paper,
	Popover,
	Stack,
	ThemeProvider,
	Typography,
	Zoom,
} from "@mui/material";
import React from "react";

const theme = createTheme({
	palette: {
		primary: {
			main: "#c9cfcf",
		},
		divider: "#d2dadf",
		background: {
			default: "#1f242d",
			paper: "#1f242d",
		},
		text: {
			primary: "#c9cfcf",
		},
	},
});

const BasicPopover = (props) => {
	const handleClose = () => {
		props.setAnchor(null);
	};

	const open = Boolean(props.anchor);

	return (
		<ThemeProvider theme={theme}>
			<Popover
				open={open}
				onClose={handleClose}
				anchorEl={props.anchor}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
				color="primary"
				TransitionComponent={Zoom}
				elevation={12}
			>
				<Paper style={{ overflow: "auto" }}>
					{props.found ? (
						<Stack
							direction="row"
							spacing={2}
							sx={{ p: 2 }}
							divider={<Divider orientation="vertical" flexItem={true} />}
						>
							{props.data.torrents.map((torrent, i) => {
								return (
									<Link
										href={torrent.url}
										sx={{ p: 2 }}
										underline="hover"
										key={i}
									>
										{torrent.quality} {torrent.type.toUpperCase()}
									</Link>
								);
							})}
						</Stack>
					) : (
						<Typography variant="body2" sx={{ p: 2 }}>
							Not Yet Available
						</Typography>
					)}
				</Paper>
			</Popover>
		</ThemeProvider>
	);
};

export default BasicPopover;
