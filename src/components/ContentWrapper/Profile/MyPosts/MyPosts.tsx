import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
	return (
		<div className={classes.Posts}>

			<Post message={'Hi, how are you?'} likesCount={1} />
			<Post message={'Ok!'} likesCount={0}/>

		</div>
	)
}

export default MyPosts;