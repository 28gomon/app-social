import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageTypes} from '../../../redux/state';

function Profile(props: ProfilePageTypes) {
	return (
		<div className={classes.Profile}>

			<ProfileInfo />

			<div className={classes.AddPost}>
				<textarea placeholder="Add Post" />
				<button>Send</button>
			</div>

			<MyPosts posts={props.posts} />

		</div>
	)
}

export default Profile;