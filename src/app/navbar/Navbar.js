import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div style={{width: '100%', display: "flex", justifyContent: "space-evenly"}}>
			<NavLink data-testid="main-link" to="/">Main</NavLink>
			<NavLink data-testid="about-link" to="/about">About</NavLink>
			<NavLink data-testid="users-link" to="/users">Users</NavLink>
		</div>
	);
};

export default Navbar;
