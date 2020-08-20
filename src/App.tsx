import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Profile from './components/ContentWrapper/Profile/Profile';
import Dialogs from "./components/ContentWrapper/Dialogs/Dialogs";

function App() {
	return (
		<div className="App">

			<Header />

			<article className="Article">

				<Navbar/>

				<ContentWrapper>

					{/*<Profile />*/}

					<Dialogs />

				</ContentWrapper>

			</article>

		</div>
	);
}

export default App;
