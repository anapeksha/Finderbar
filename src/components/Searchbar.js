import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import * as React from "react";
import { CustomTextField } from "../styles";

const Searchbar = (props) => {
	const handleChange = (event) => {
		props.setSearch(event.target.value);
	};

	return (
		<div>
			<CustomTextField
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton>
								<Search />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default Searchbar;
