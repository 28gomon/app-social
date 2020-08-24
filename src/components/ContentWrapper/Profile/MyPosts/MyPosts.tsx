import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageTypes} from "../../../../redux/state";

function MyPosts(props: ProfilePageTypes) {

	return (
		<div className={classes.Posts}>

			{
				props.posts.map((post, index) => {
					return (
						<Post
							key={index}
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