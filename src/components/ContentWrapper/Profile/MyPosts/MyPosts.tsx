import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageTypes} from "../../../../redux/state";

function MyPosts(props: ProfilePageTypes) {

	// const postData = [
	// 	{id: 1, message: "Hello World", likesCount: 2},
	// 	{id: 2, message: "Hi, how are you?", likesCount: 12},
	// 	{id: 3, message: "Ok!", likesCount: 5},
	// ];

	return (
		<div className={classes.Posts}>

			{
				props.posts.map(post => {
					return (
						<Post
							id={post.id}
							message={post.message}
							likesCount={post.likesCount} />
					)
				})
			}

		</div>
	)
}

export default MyPosts;