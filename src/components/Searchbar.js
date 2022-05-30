import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import * as React from "react";
import { CustomIconButton, CustomTextField } from "../styles";

const Searchbar = (props) => {
	const handleChange = (event) => {
		props.handleChange(event.target.value);
	};

	return (
		<div>
			<CustomTextField
				value={props.value}
				onChange={handleChange}
				placeholder="Search"
				sx={{
					input: {
						color: "white",
					},
					label: {
						color: "#c9cfcf",
					},
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<CustomIconButton onClick={props.onSearch}>
								<Search />
							</CustomIconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default Searchbar;
