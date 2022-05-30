import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#c9cfcf",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#c9cfcf",
		},
		"&:hover fieldset": {
			borderColor: "#c9cfcf",
		},
		"& .MuiInput-underline:after": {
			borderColor: "#c9cfcf",
		},
	},
});

export default CustomTextField;
