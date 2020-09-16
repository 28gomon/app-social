import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogUserItemType = {
	id: number
	name: string
	active: boolean
}

export const DialogUserItem: React.FC<DialogUserItemType> = (props) => {

	let cls = [classes.Item];

	if (props.active) {
		cls.push(classes.active);
	}

	return (
		<div className={cls.join(' ')} key={props.id}>
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	)
}