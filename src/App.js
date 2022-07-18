import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>

		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
}

export default App;
