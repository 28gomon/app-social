import {PostsTypes, ProfilePageTypes} from "../types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../types/action-types";


const profileReducer = (initialState: ProfilePageTypes, action: any) => {

	if (action.type === ADD_POST) {
		if (initialState.newPostText) {
			const newPost: PostsTypes = {
				id: initialState.posts.length + 1,
				message: initialState.newPostText,
				likesCount: 0
			};
			initialState.newPostText = '';
			initialState.posts.push(newPost);
		}
	} else if (action.type === UPDATE_NEW_POST_TEXT) {
		initialState.newPostText = action.newText;
	}

	return initialState;
}

export default profileReducer;

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