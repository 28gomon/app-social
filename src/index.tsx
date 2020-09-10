import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {RootStateTypes} from "./types";

const rerenderEntireTree = (state: RootStateTypes) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
