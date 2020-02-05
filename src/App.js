import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axiosWithAuth from './utils/AxiosWithAuth';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import AddMeal from './components/AddMeal'
import MealList from './components/MealList';
import Dashboard from './components/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import CreateGigapet from './components/CreateGigapet';

function App() {
  const [pets, setPets] = useState();

  useEffect (() => {
        
    axiosWithAuth()
    .get('/pets/')
    .then(res => {
        console.log(res.data)
        // setPet state to res.data
    })
    .catch(err => console.log('Cannot fetch pets', err))
}, [])

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path='/creategigapet' component={CreateGigapet} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/meals" component={MealList} />
        <PrivateRoute exact path="/addmeal" component={AddMeal} />
      </div>
    </Router>
    
  );
}

export default App;
