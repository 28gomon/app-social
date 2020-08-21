import React from "react";
import classes from './Dialogs.module.css';
import {DialogUserItem} from "./DialogUserItem/DialogUserItem";
import {DialogMessageItem} from "./DialogMessageItem/DialogMessageItem";

function Dialogs() {
	return(
		<div className={classes.Dialogs}>

			<div className={classes.Title}>
				Dialog
			</div>

			<div className={classes.DialogContainer}>
				<div className={classes.UserList}>

					<DialogUserItem id={1} name={'Andrey'} active={true} />
					<DialogUserItem id={2} name={'Sergey'} active={false} />
					<DialogUserItem id={3} name={'Valeriy'} active={false} />
					<DialogUserItem id={4} name={'Alexandr'} active={false} />
					<DialogUserItem id={5} name={'Afonia'} active={false} />
					<DialogUserItem id={6} name={'Evlampij'} active={false} />
					<DialogUserItem id={8} name={'Geka'} active={false} />
					<DialogUserItem id={9} name={'Roma'} active={false} />
					<DialogUserItem id={10} name={'Dima'} active={false} />

				</div>

				<div className={classes.DialogUserList}>

					<DialogMessageItem id={1} text={'Hi'} />
					<DialogMessageItem id={2} text={'Hello my friend'} />
					<DialogMessageItem id={3} text={'hqwfkwefklewjfklewjfkwe'} />
					<DialogMessageItem id={4} text={'hqwfkwefklewjfklewjfkwe'} />

				</div>
			</div>

		</div>
	)
}

export default Dialogs;