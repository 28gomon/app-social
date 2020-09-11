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
	newMessageText: string
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
	_addPost: () => void
	_updateNewPostText: (newText: string) => void
	getState: () => RootStateTypes
	subscriber: (observer: any) => void
	dispatch: (action: any) => void
}