import React from 'react';
import classes from "./Post.module.css";

type PostType = {
	id: number
	message: string
	likesCount: number
}

function Post(props: PostType) {
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