import React from 'react';
import classes from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={classes.Nav}>
			<div><a href="/">Home</a></div>
			<div><a href="/profile">Profile</a></div>
			<div><a href="/dialogs">Dialogs</a></div>
			<div><a href="/news">News</a></div>
		</nav>
	)
}

export default Navbar;