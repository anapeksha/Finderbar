import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Carousel } from "../components";
import { handleImage } from "../controllers";

const Modal = (props) => {
	const handleClose = () => {
		props.setOpen(false);
	};
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
					<DialogActions>
						<Carousel id={props.data.id} />
					</DialogActions>
				</Box>
			</Dialog>
		</div>
	);
};
export default Modal;
