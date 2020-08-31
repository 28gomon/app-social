import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageTypes} from '../../../redux/state';

function Profile(props: ProfilePageTypes) {

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	function addPost() {
		let text = newPostElement.current;
	}

	return (
		<div className={classes.Profile}>

			<ProfileInfo />

			<div className={classes.AddPost}>
				<textarea ref={newPostElement} placeholder="Add Post" />
				<button onClick={addPost}>Send</button>
			</div>

			<MyPosts posts={props.posts} />

		</div>
	)
}

export default Profile;