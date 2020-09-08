import React, {ChangeEvent, useState} from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsTypes} from '../../../redux/state';

type ProfilePropsType = {
	posts: Array<PostsTypes>
	addPost: (postMessage: string) => void
}

function Profile({posts, addPost}: ProfilePropsType) {

	let [value, setValue] = useState<string>('');

	function addPostHandler() {
		setValue('');
		addPost(value);
	}

	function onChangeHandler(e: string) {
		setValue(e);
	}

	return (
		<div className={classes.Profile}>

			<ProfileInfo />

			<div className={classes.AddPost}>
				<textarea
					value={value}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
						onChangeHandler(e.currentTarget.value);
					}}
					placeholder="Add Post" />
				<button onClick={addPostHandler}>Send</button>
			</div>

			<MyPosts posts={posts} />

		</div>
	)
}

export default Profile;