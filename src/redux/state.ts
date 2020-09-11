import {PostsTypes, StoreTypes, SubscriberTypes} from "../types";


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
			]
		},
		sidebar: {}
	},

	_rerenderEntireTree(state: SubscriberTypes | any) {},

	getState() {
		return this._state;
	},

	addPost() {
		if (this._state.profilePage.newPostText) {
			const newPost: PostsTypes = {
				id: this._state.profilePage.posts.length + 1,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.newPostText = '';
			this._state.profilePage.posts.push(newPost);
			this._rerenderEntireTree(this._state);
		}
	},

	updateNewPostText(newText: string) {
		this._state.profilePage.newPostText = newText;
		this._rerenderEntireTree(this._state);
	},

	subscriber(observer: any) {
		this._rerenderEntireTree = observer;
	}

	// реализация dispatch - lesson 38(ветка git dispatch-38)
}

// @ts-ignore
window.store = store;

export default store;