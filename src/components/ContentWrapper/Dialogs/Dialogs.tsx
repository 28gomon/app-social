import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

function Dialogs() {
	return(
		<div className={classes.Dialogs}>

			<div className={classes.Title}>
				Dialog
			</div>

			<div className={classes.DialogContainer}>
				<div className={classes.UserList}>
					<div className={classes.Item + ' ' + classes.active}>
						<NavLink to={'/dialogs/1'}>Andrey</NavLink>
					</div>
					<div className={classes.Item}>
						<NavLink to={'/dialogs/2'}>Sergey</NavLink>
					</div>
					<div className={classes.Item}>
						<NavLink to={'/dialogs/3'}>Valeriy</NavLink>
					</div>
					<div className={classes.Item}>
						<NavLink to={'/dialogs/4'}>Alexandr</NavLink>
					</div>
					<div className={classes.Item}>
						<NavLink to={'/dialogs/5'}>Afonia</NavLink>
					</div>
					<div className={classes.Item}>
						<NavLink to={'/dialogs/6'}>Evlampij</NavLink>
					</div>
				</div>

				<div className={classes.DialogUserList}>
					<div className={classes.Item}>
						<div className={classes.Text}>Hi</div>
					</div>

					<div className={classes.Item}>
						<div className={classes.Text}>Hello my friend</div>
					</div>

					<div className={classes.Item}>
						<div className={classes.Text}>hqwfkwefklewjfklewjfkwe</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;