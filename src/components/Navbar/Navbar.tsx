import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const navigationLinks = [
	{id: 1, title: 'Home', to: '/', exact: true},
	{id: 2, title: 'Profile', to: '/profile', exact: false},
	{id: 3, title: 'Dialogs', to: '/dialogs', exact: false},
	{id: 4, title: 'News', to: '/news', exact: false},
];

function Navbar() {

	const links = navigationLinks.map(link => {
		return (
			<div key={link.id}>
				<NavLink
					activeClassName={classes.active}
					exact={link.exact}
					to={link.to}>{link.title}</NavLink>
			</div>
		)
	})

	return (
		<nav className={classes.Nav}>
			{links}
		</nav>
	)
}

export default Navbar;