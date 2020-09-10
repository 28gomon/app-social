import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Profile from './components/ContentWrapper/Profile/Profile';
import Dialogs from "./components/ContentWrapper/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateTypes} from "./types";


type AppPropsType = {
	state: RootStateTypes
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText, ...addProps}: AppPropsType) {
	return (
		<BrowserRouter>
			<div className="App">

				<Header/>

				<article className="Article">

					<Navbar/>

					<ContentWrapper>

						<Route
							path="/profile"
							render={() => <Profile
								posts={state.profilePage.posts}
								newPostText={state.profilePage.newPostText}
								addPost={addPost}
								updateNewPostText={updateNewPostText}
							/>}/>
						<Route
							path="/dialogs"
							render={() => <Dialogs data={state.dialogsPage} />}/>

					</ContentWrapper>

				</article>

			</div>
		</BrowserRouter>
	);
}

export default App;
