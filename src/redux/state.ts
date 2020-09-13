import {StoreTypes, SubscriberTypes} from "../types/types";
import {
	ADD_NEW_MESSAGE_TEXT,
	ADD_POST,
	UPDATE_NEW_MESSAGE_TEXT,
	UPDATE_NEW_POST_TEXT
} from "../types/action-types";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store: StoreTypes = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: "Hello World", likesCount: 2},
				{id: 2, message: "Hi, how are you?", likesCount: 12},
				{id: 3, message: "Ok!", likesCount: 5},
			],
			newPostText: ''
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Andrey', active: true},
				{id: 2, name: 'Sergey', active: false},
				{id: 3, name: 'Valeriy', active: false},
				{id: 4, name: 'Alexandr', active: false},
				{id: 5, name: 'Afonia', active: false},
				{id: 6, name: 'Evlampij', active: false},
				{id: 7, name: 'Geka', active: false},
				{id: 8, name: 'Roma', active: false},
				{id: 9, name: 'Dima', active: false},
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'Hello my friend'},
				{id: 3, message: 'hqwfkwefklewjfklewjfkwe'},
				{id: 4, message: 'hqwfkwefklewjfklewjfkwe'},
				{id: 5, message: 'How your affairs'},
			],
			newMessageText: ''
		},
		sidebar: {}
	},

	_rerenderEntireTree(state: SubscriberTypes | any) {},

	getState() {
		return this._state;
	},

	subscriber(observer: any) {
		this._rerenderEntireTree = observer;
	},

	// реализация dispatch - lesson 38(ветка git dispatch-38)
	dispatch(action: any) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

		this._rerenderEntireTree(this._state);
	}
}

// profile
export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}

export const updateNewPostTextActionCreator = (text: string) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}
// profile

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

// @ts-ignore
window.store = store;

export default store;