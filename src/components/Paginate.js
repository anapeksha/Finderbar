import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

const Paginate = (props) => {
	const handleChange = (page) => {
		props.setPage(page);
		window.scroll(0, 0);
	};
	return (
		<Stack spacing={2}>
			<Pagination
				count={props.pages || 10}
				color="secondary"
				onChange={(e) => {
					// @ts-ignore
					handleChange(e.target.textContent);
				}}
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "0.5vh",
				}}
				hideNextButton
				hidePrevButton
			/>
		</Stack>
	);
};

export default Paginate;
