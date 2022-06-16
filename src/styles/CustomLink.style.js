import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)({
	textDecoration: "none",
	color: "#c9cfcf",
	"&:hover": {
		color: "#b0b0b0",
	},
});

export default CustomLink;
