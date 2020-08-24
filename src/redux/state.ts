// profilePage -> posts -> [{}]
export type PostsTypes = {
	id: number
	message: string
	likesCount: number
}
// profilePage -> posts
export type ProfilePageTypes = {
	posts: Array<PostsTypes>
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

let state: RootStateTypes = {
	profilePage: {
		posts: [
			{id: 1, message: "Hello World", likesCount: 2},
			{id: 2, message: "Hi, how are you?", likesCount: 12},
			{id: 3, message: "Ok!", likesCount: 5},
		]
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
		]
	},
	sidebar: {}
}

export default state;