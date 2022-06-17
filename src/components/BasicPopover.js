import {
	createTheme,
	Divider,
	Link,
	Popover,
	Stack,
	ThemeProvider,
	Typography,
	Zoom,
} from "@mui/material";

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
		<div>
			<ThemeProvider theme={theme}>
				<Popover
					open={open}
					anchorEl={props.anchor}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					color="primary"
					TransitionComponent={Zoom}
				>
					{props.found ? (
						<Stack
							direction="row"
							spacing={2}
							sx={{ p: 2 }}
							divider={<Divider orientation="vertical" flexItem />}
						>
							{props.data.map((torrent, i) => {
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
				</Popover>
			</ThemeProvider>
		</div>
	);
};

export default BasicPopover;
