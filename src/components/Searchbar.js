import { Search } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { InputAdornment } from "@mui/material";
import { CustomIconButton, CustomTextField } from "../styles";
import React from "react";

const Searchbar = (props) => {
	return (
		<div>
			<CustomTextField
				value={props.value}
				onChange={(event) => props.handleChange(event.target.value)}
				placeholder="Search"
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						event.preventDefault();
						props.onSearch();
					}
				}}
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
