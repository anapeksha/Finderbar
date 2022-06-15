import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)({
	backgroundColor: "#202739",
	borderColor: "#c9cfcf",
	borderRadius: "4.5px",
	boxShadow:
		"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
	"&:hover": {
		backgroundColor: "#272f46",
		borderColor: "#272f46",
		boxShadow:
			"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
	},
	"&:active": {
		backgroundColor: "#272f46",
		borderColor: "#272f46",
		boxShadow:
			"rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
	},
});

export default CustomButton;
