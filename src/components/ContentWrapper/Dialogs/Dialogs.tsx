import React from "react";
// @ts-ignore
import classes from './Dialogs.module.css';
import {DialogUserItem} from "./DialogUserItem/DialogUserItem";
import {DialogMessageItem} from "./DialogMessageItem/DialogMessageItem";
import {DialogsPageTypes} from "../../../types";

type DialogStateType = {
	data: DialogsPageTypes
}

function Dialogs({data}: DialogStateType) {

	return(
		<div className={classes.Dialogs}>

			<div className={classes.Title}>Dialog</div>

			<div className={classes.DialogContainer}>
				<div className={classes.UserList}>

					{
						data.dialogs.map((data, index) => {
							return (
								<DialogUserItem
									key={index + '_' + data.id}
									id={data.id}
									name={data.name}
									active={data.active} />
							)
						})
					}

				</div>

				<div className={classes.DialogUserList}>

					{
						data.messages.map((data, index) => {
							return (
								<DialogMessageItem
									key={index + '_' + data.id}
									id={data.id}
									text={data.message} />
							)
						})
					}

				</div>
			</div>

		</div>
	)
}

export default Dialogs;