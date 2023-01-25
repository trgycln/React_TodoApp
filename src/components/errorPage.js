import React from "react";

const ErrorPage = ({errorMessage,handleClose}) => {
	
	return (
		<div style={{
			position: "absolute",
			top: "0",
			left: "0",
			width: "100vw",
			height: "100vh",
			backgroundColor: "rgba(0,0,0,0.3)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			zIndex:"10"
		}}>
			<div style={{
				backgroundColor: "#fff",
				width: "400px",
				textAlign: "center",
				borderRadius: "5px"
			}}>
				<h2>Error</h2>
				<p>{errorMessage}</p>
				<button onClick={handleClose} className="btn btn-primary mb-2">Close</button>
			</div>

		</div>
	)
}

export default ErrorPage;