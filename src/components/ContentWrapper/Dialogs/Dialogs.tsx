import React from "react";
// @ts-ignore
import classes from './Dialogs.module.css';
import {DialogUserItem} from "./DialogUserItem/DialogUserItem";
import {DialogMessageItem} from "./DialogMessageItem/DialogMessageItem";
import {DialogsPageTypes} from "../../../types/types";
import {
	addNewMessageTextActionCreator,
	updateNewMessageTextActionCreator
} from "../../../redux/dialog-reducer";

type DialogStateType = {
	data: DialogsPageTypes
	dispatch: (action: any) => void
}

function Dialogs({data, dispatch}: DialogStateType) {

	function onSendMessageClick() {
		dispatch(addNewMessageTextActionCreator());
		dispatch(updateNewMessageTextActionCreator(''));
	}

	function onNewTextMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
	}

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

					<div className={classes.DialogUserListTextArea}>
						<div>
							<textarea
								onChange={onNewTextMessageChange}
								placeholder={'Add message'}
								value={data.newMessageText}/>
						</div>
						<div>
							<button onClick={onSendMessageClick}>Отправить</button>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
}

export default Dialogs;