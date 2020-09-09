import {rerenderEntireTree} from "../render";

// profilePage -> posts -> [{}]
export type PostsTypes = {
	id: number
	message: string
	likesCount: number
}
// profilePage -> posts
export type ProfilePageTypes = {
	posts: Array<PostsTypes>
	newPostText: string
}
// dialogsPage -> dialogs -> [{}]
type DialogsTypes = {
	id: number
	name: string
	active: boolean
}
// dialogsPage -> message -> [{}]
type MessagesTypes = {
	id: number
	message: string
}
// dialogsPage -> dialogs
// dialogsPage -> message
export type DialogsPageTypes = {
	dialogs: Array<DialogsTypes>
	messages: Array<MessagesTypes>
}

type SidebarTypes = {}

export type RootStateTypes = {
	profilePage: ProfilePageTypes
	dialogsPage: DialogsPageTypes
	sidebar: SidebarTypes
}

const state: RootStateTypes = {
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
}

export let addPost = () => {
	if (state.profilePage.newPostText) {
		const newPost: PostsTypes = {
			id: state.profilePage.posts.length + 1,
			message: state.profilePage.newPostText,
			likesCount: 0
		};
		state.profilePage.newPostText = '';
		state.profilePage.posts.push(newPost);
		rerenderEntireTree(state);
	}
}

export let updateNewPostText = (newText: string) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

// @ts-ignore
window.state = state;

export default state;