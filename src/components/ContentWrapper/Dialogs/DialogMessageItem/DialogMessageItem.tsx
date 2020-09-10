// @ts-ignore
import classes from "../Dialogs.module.css";
import React from "react";

type DialogMessageItemType = {
	id: number
	text: string
}

export function DialogMessageItem(props: DialogMessageItemType) {
	return (
		<div className={classes.Item} key={props.id}>
			<div className={classes.Text}>{props.text}</div>
		</div>
	);
}