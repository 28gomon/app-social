import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsTypes} from "../../../types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

type ProfilePropsType = {
	posts: Array<PostsTypes>
	newPostText: string
	dispatch: (action: any) => void
}

function Profile({posts, newPostText, dispatch}: ProfilePropsType) {

	function addPostHandler() {
		dispatch(addPostActionCreator());
		dispatch(updateNewPostTextActionCreator(''));
	}

	function onChangeHandler(e: string) {
		dispatch(updateNewPostTextActionCreator(e));
	}

	return (
		<div className={classes.Profile}>

			<ProfileInfo />

			<div className={classes.AddPost}>
				<textarea
					value={newPostText}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
						onChangeHandler(e.currentTarget.value);
					}}
					placeholder="Add Post"
				/>
				<button
					onClick={addPostHandler}
				>Send</button>
			</div>

			<MyPosts posts={posts} />

		</div>
	)
}

export default Profile;