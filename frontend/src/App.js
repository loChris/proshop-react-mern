import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/homescreen/HomeScreen';
import ProductScreen from './screens/productscreen/ProductScreen';
import './App.css';

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomeScreen} />
					<Route path="/product/:id" component={ProductScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
