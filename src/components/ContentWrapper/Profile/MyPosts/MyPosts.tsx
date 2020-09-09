import React from 'react';
// @ts-ignore
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsTypes} from "../../../../redux/state";

type MyPostsPropsType = {
	posts: Array<PostsTypes>
}

function MyPosts({posts}: MyPostsPropsType) {

	return (
		<div className={classes.Posts}>

			{
				posts.map((post, index) => {
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