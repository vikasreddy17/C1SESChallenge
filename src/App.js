import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Feed from './components/Feed.js';
import React from 'react';

function App() {
	return (
		<div className = "App">
			<Header />
			<Feed />
			<Footer />
		</div>
	  	);
}

export default App;
