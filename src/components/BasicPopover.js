import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const BasicPopover = (props) => {

	const handleClose = () => {
		props.setAnchor(null);
	};

	const open = Boolean(props.anchor);

	return (
		<div>
			<Popover
				open={open}
				anchorEl={props.anchor}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
			</Popover>
		</div>
	);
}

export default BasicPopover;