import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)({
	marginRight: 2,
	color: "#c9cfcf",
	"&:hover": {
		color: "#b0b0b0",
	},
});

export default CustomIconButton;
