import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	justifyContent: "center",
	alignItems: "center",
});

export default Wrapper;
