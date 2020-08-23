import React from 'react';
import classes from "./Post.module.css";
import {PostsTypes} from "../../../../../redux/state";

function Post(props: PostsTypes) {
	return (
		<>
			<div className={classes.Post}>
				<img
					src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
					alt="User"/>
				<span>{props.message}</span>
			</div>
			<div className={classes.LikesCounter}>
				Likes: {props.likesCount}
			</div>
		</>
	)
}

export default Post;