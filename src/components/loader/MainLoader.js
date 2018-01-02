import React from 'react';
//import {CircularProgress} from 'material-ui';

const loader = "http://gifimage.net/wp-content/uploads/2017/08/loading-gif-transparent-15.gif";

export const MainLoader = () => (
	<div style={styles.cover}>
		<div style={styles.loader}>
			<img src={loader} alt="loader"/>	
		</div>
	</div>
);

const styles = {
	cover:{
		height:"100vh",
		width:"100%",
		position:"fixed",
		background:"rgba(0,0,0,0.5)",
		display:"flex",
		alignItems:"center",
		justifyContent:"center"
	},
	loader:{

	}
}