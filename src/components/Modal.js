import { Box, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { handleImage } from "../controllers";
var renderCount = 0;

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
				aria-labelledby="responsive-dialog-title"
			>
				<Box
					component="img"
					src={handleImage(props.data.backdrop_path || props.data.poster_path)}
					sx={{
						height: 233,
						width: 350,
						maxHeight: { xs: 233, md: 167 },
						maxWidth: { xs: 350, md: 250 },
					}}
				/>
				<DialogTitle id="responsive-dialog-title">
					{props.data.title || props.data.original_title}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{(
							props.data.first_air_date ||
							props.data.release_date ||
							"-----"
						).substring(0, 4)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Disagree
					</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default Modal;
