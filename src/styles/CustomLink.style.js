import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)({
	textDecoration: "none",
	color: "#c9cfcf",
	"&:hover": {
		color: "#93989b",
	},
});

export default CustomLink;
