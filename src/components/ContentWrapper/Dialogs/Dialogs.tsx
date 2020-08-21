import React from "react";
import classes from './Dialogs.module.css';
import {DialogUserItem} from "./DialogUserItem/DialogUserItem";
import {DialogMessageItem} from "./DialogMessageItem/DialogMessageItem";

function Dialogs() {

	const dialogsData = [
		{id: 1, name: 'Andrey', active: true},
		{id: 2, name: 'Sergey', active: false},
		{id: 3, name: 'Valeriy', active: false},
		{id: 4, name: 'Alexandr', active: false},
		{id: 5, name: 'Afonia', active: false},
		{id: 6, name: 'Evlampij', active: false},
		{id: 7, name: 'Geka', active: false},
		{id: 8, name: 'Roma', active: false},
		{id: 9, name: 'Dima', active: false},
	];

	const messagesData = [
		{id: 1, text: 'Hi'},
		{id: 2, text: 'Hello my friend'},
		{id: 3, text: 'hqwfkwefklewjfklewjfkwe'},
		{id: 4, text: 'hqwfkwefklewjfklewjfkwe'},
	];

	return(
		<div className={classes.Dialogs}>

			<div className={classes.Title}>Dialog</div>

			<div className={classes.DialogContainer}>
				<div className={classes.UserList}>

					{
						dialogsData.map((data, index) => {
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
						messagesData.map((data, index) => {
							return (
								<DialogMessageItem
									key={index + '_' + data.id}
									id={data.id}
									text={data.text} />
							)
						})
					}

				</div>
			</div>

		</div>
	)
}

export default Dialogs;