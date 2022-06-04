import { Search } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { InputAdornment } from "@mui/material";
import * as React from "react";
import { CustomIconButton, CustomTextField } from "../styles";

const Searchbar = (props) => {
	return (
		<div>
			<CustomTextField
				value={props.value}
				onChange={(event) => props.handleChange(event.target.value)}
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
							{props.value !== "" ? (
								<CustomIconButton onClick={props.onClear} size="small">
									<ClearIcon fontSize="small" />
								</CustomIconButton>
							) : null}
							<CustomIconButton onClick={props.onSearch}>
								<Search />
							</CustomIconButton>
						</InputAdornment>
					),
				}}
				className="animate__animated animate__fadeIn animate__fast"
			/>
		</div>
	);
};

export default Searchbar;
