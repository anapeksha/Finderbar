import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#a9ccff",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#a9ccff",
		},
		"&:hover fieldset": {
			borderColor: "#a9ccff",
		},
		"& .MuiInput-underline:after": {
			borderColor: "#a9ccff",
		},
	},
});

export default CustomTextField;
