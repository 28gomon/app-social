import {DialogsPageTypes} from "../types/types";
import {ADD_NEW_MESSAGE_TEXT, UPDATE_NEW_MESSAGE_TEXT} from "../types/action-types";


const dialogReducer = (initialState: DialogsPageTypes, action: any) => {

	if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
		initialState.newMessageText = action.newText
	} else if (action.type === ADD_NEW_MESSAGE_TEXT) {
		const text = initialState.newMessageText;
		if (text) {
			const newMessageText = {
				id: initialState.messages.length,
				message: text
			}
			initialState.messages.push(newMessageText);
			initialState.newMessageText = '';
		}
	}

	return initialState;
}

export default dialogReducer;

// dialogs
export const updateNewMessageTextActionCreator = (newText: string) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: newText
	}
}

export const addNewMessageTextActionCreator = () => {
	return {
		type: ADD_NEW_MESSAGE_TEXT
	}
}
// dialogs