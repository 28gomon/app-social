import classes from "../Dialogs.module.css";
import React from "react";

type DialogMessageItemType = {
	id: number
	text: string
}

export const DialogMessageItem: React.FC<DialogMessageItemType> = (props) => {
	return (
		<div className={classes.Item} key={props.id}>
			<div className={classes.Text}>{props.text}</div>
		</div>
	);
}