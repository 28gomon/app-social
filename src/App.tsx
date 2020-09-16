import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import {Profile} from './components/ContentWrapper/Profile/Profile';
import {Dialogs} from "./components/ContentWrapper/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">

				<Header/>

				<article className="Article">

					<Navbar/>

					<ContentWrapper>

						<Route path="/profile" render={() => <Profile />}/>
						<Route path="/dialogs" render={() => <Dialogs />}/>

					</ContentWrapper>

				</article>

			</div>
		</BrowserRouter>
	);
}

export default App;
