import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

const Paginate = () => {
	return (
		<Stack spacing={2}>
			<Pagination
				count={10}
				variant="outlined"
				color="primary"
				style={{
					display: "flex",
					justifyContent: "center",
					position: "relative",
					marginTop: "0.5vh",
				}}
			/>
		</Stack>
	);
};

export default Paginate;
