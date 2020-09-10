import React, {ChangeEvent} from 'react';
// @ts-ignore
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsTypes} from "../../../types";

type ProfilePropsType = {
	posts: Array<PostsTypes>
	newPostText: string
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

function Profile({posts, addPost, newPostText, updateNewPostText}: ProfilePropsType) {

	function addPostHandler() {
		addPost();
		updateNewPostText('');
	}

	function onChangeHandler(e: string) {
		updateNewPostText(e);
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