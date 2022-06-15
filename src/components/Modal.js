import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { BasicPopover, Carousel } from "../components";
import { getIMDB, handleImage } from "../controllers";

const Modal = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClose = () => {
		props.setOpen(false);
	};
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const getID = async () => {
		const res = await getIMDB(props.data.id);
		console.log(res.imdb_id);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={props.open}
				onClose={handleClose}
				TransitionComponent={Slide}
				aria-labelledby="responsive-dialog-title"
			>
				<Box style={{ backgroundColor: "#252a35", color: "#c9cfcf" }}>
					<Box
						component="img"
						src={handleImage(
							props.data.backdrop_path || props.data.poster_path
						)}
						sx={{ display: "flex", objectFit: "contain", width: "100%" }}
					/>
					<DialogTitle id="responsive-dialog-title">
						{props.data.title || props.data.original_title}
					</DialogTitle>
					<DialogContent>
						<DialogContentText
							gutterBottom
							variant="subtitle1"
							style={{ color: "#c9cfcf" }}
						>
							<strong>
								{(
									props.data.first_air_date ||
									props.data.release_date ||
									"-----"
								).substring(0, 4)}
							</strong>
						</DialogContentText>
						<DialogContentText
							paragraph={true}
							gutterBottom
							variant="body2"
							style={{ color: "#c9cfcf" }}
						>
							{props.data.overview}
						</DialogContentText>
					</DialogContent>
					<DialogActions sx={{ display: "flex", justifyContent: "center" }}>
						<Button
							variant="text"
							startIcon={<DownloadForOfflineRoundedIcon />}
							sx={{ color: "#c9cfcf" }}
							onClick={handleClick}
						>
							Download
						</Button>
					</DialogActions>
					<Carousel id={props.data.id} />
					<BasicPopover anchor={anchorEl} setAnchor={setAnchorEl} />
				</Box>
			</Dialog>
		</div>
	);
};
export default Modal;
