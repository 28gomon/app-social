import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

function Profile() {
	return (
		<div className={classes.Profile}>

			<ProfileInfo />

			<div className={classes.AddPost}>
				<textarea placeholder="Add Post" />
				<button>Send</button>
			</div>

			<MyPosts />

		</div>
	)
}

export default Profile;