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
export type DialogsTypes = {
	id: number
	name: string
	active: boolean
}
// dialogsPage -> message -> [{}]
export type MessagesTypes = {
	id: number
	message: string
}
// dialogsPage -> dialogs
// dialogsPage -> message
export type DialogsPageTypes = {
	dialogs: Array<DialogsTypes>
	messages: Array<MessagesTypes>
}

export type SidebarTypes = {}

export type RootStateTypes = {
	profilePage: ProfilePageTypes
	dialogsPage: DialogsPageTypes
	sidebar: SidebarTypes
}

export type SubscriberTypes = {
	subscriber: (observer: RootStateTypes) => void
}

export type StoreTypes = {
	_state: RootStateTypes
	_rerenderEntireTree: (state: SubscriberTypes | any) => void
	getState: () => RootStateTypes
	addPost: () => void
	updateNewPostText: (newText: string) => void
	subscriber: (observer: any) => void
}