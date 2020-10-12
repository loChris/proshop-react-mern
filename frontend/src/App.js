import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<h1>Welcome To ProShop</h1>
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
