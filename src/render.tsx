import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, RootStateTypes, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state: RootStateTypes) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}