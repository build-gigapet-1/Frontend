import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import AddMeal from './components/AddMeal'
import MealList from './components/MealList';
import Dashboard from './components/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import CreateGigapet from './components/CreateGigapet';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registeration" component={Registration} />
        <Route exact path='/creategigapet' component={CreateGigapet} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/meals" component={MealList} />
        <Route exact path="/addmeal" component={AddMeal} />
      </div>
    </Router>
    
  );
}

export default App;
