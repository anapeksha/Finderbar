import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
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
import { useEffect, useState } from "react";
import { BasicPopover, Carousel } from "../components";
import { getIMDB, getYTS, handleImage } from "../controllers";
import { CustomButton, CustomIconButton } from "../styles";

const Modal = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [torrentData, setTorrentData] = useState({
		imdb_rating: "",
		torrents: [],
	});
	const [found, setFound] = useState(false);

	const handleClose = () => {
		props.setOpen(false);
	};
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const getTorrent = async () => {
		if (props.data.id !== undefined) {
			var imdb_id = await getIMDB(props.data.id);
			if (imdb_id !== undefined) {
				var torrent = await getYTS(imdb_id);
				if (torrent !== undefined && torrent.data.movie.title !== null) {
					setTorrentData({
						imdb_rating: torrent.data.movie.rating,
						torrents: torrent.data.movie.torrents,
					});
					setFound(true);
				} else setFound(false);
			}
		}
	};

	useEffect(() => {
		getTorrent();
	}, [props.data.id]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<Dialog
			fullScreen={fullScreen}
			open={props.open}
			onClose={handleClose}
			TransitionComponent={Slide}
			aria-labelledby="responsive-dialog-title"
		>
			<Box style={{ backgroundColor: "#252a35", color: "#c9cfcf" }}>
				<DialogActions style={{ display: "flex", justifyContent: "start" }}>
					<CustomIconButton onClick={handleClose}>
						<CloseRoundedIcon fontSize="small" />
					</CustomIconButton>
				</DialogActions>
				<Box
					component="img"
					src={handleImage(props.data.backdrop_path || props.data.poster_path)}
					sx={{
						display: "flex",
						objectFit: "contain",
						width: "100%",
						borderRadius: "2px",
					}}
					alt="props.data.title"
				/>
				<DialogTitle id="responsive-dialog-title" variant="h4">
					{props.data.title || props.data.original_title}
				</DialogTitle>
				<DialogContent>
					<DialogContentText variant="subtitle1" style={{ color: "#c9cfcf" }}>
						<strong>
							{(
								props.data.first_air_date ||
								props.data.release_date ||
								"-----"
							).substring(0, 4)}{" "}
							[
							{props.data.original_language &&
								props.data.original_language.toUpperCase()}
							]
						</strong>
					</DialogContentText>
					<DialogContentText
						gutterBottom
						variant="subtitle2"
						style={{ color: "#c9cfcf" }}
					>
						IMDb - <strong>{torrentData.imdb_rating}★</strong>
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
					<CustomButton
						variant="contained"
						startIcon={<DownloadForOfflineRoundedIcon />}
						onClick={handleClick}
					>
						Download
					</CustomButton>
					<BasicPopover
						anchor={anchorEl}
						setAnchor={setAnchorEl}
						data={torrentData}
						found={found}
					/>
				</DialogActions>
				<DialogContent>
					<DialogContentText variant="subtitle1" style={{ color: "#c9cfcf" }}>
						Cast
					</DialogContentText>
					<Carousel id={props.data.id} />
				</DialogContent>
			</Box>
		</Dialog>
	);
};
export default Modal;
