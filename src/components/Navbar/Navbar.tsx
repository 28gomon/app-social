import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
	return (
		<nav className={classes.Nav}>
			<div><NavLink exact to="/">Home</NavLink></div>
			<div><NavLink to="/profile">Profile</NavLink></div>
			<div><NavLink to="/dialogs">Dialogs</NavLink></div>
			<div><NavLink to="/news">News</NavLink></div>
		</nav>
	)
}

export default Navbar;