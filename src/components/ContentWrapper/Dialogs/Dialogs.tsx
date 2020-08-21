import React from "react";
import classes from './Dialogs.module.css';

function Dialogs() {
	return(
		<div className={classes.Dialogs}>

			<div className={classes.Title}>
				Dialog
			</div>

			<div className={classes.DialogContainer}>
				<div className={classes.UserList}>
					<div className={classes.Item + ' ' + classes.active}>
						Andrey
					</div>
					<div className={classes.Item}>
						Sergey
					</div>
					<div className={classes.Item}>
						Valeriy
					</div>
					<div className={classes.Item}>
						Alexandr
					</div>
					<div className={classes.Item}>
						Afonia
					</div>
					<div className={classes.Item}>
						Evlampij
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