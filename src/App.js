
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
import Feedgigapet from './components/FeedGigapet';

function App() {

  const [pets, setPets] = useState([]);
  const [petsId, setPetsId] = useState([]);

   useEffect (() => {
      
     const gigapetId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
     axiosWithAuth()
     .get(`/pets/`)
     .then(res => {
       console.log(res.data);
       setPets(res.data);
     })
     .catch(err => console.log('Cannot fetch pets', err))
 }, [])


  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path='/creategigapet' component={CreateGigapet} />
        <PrivateRoute
         exact path="/dashboard"
         component={Dashboard}
         render={(props) => <Dashboard {...props} pets={pets}/>}
        />
        <PrivateRoute
         exact path="/meals"
         component={MealList}
         render={(props) => < MealList {...props} pets={pets}/>}
        />
        <PrivateRoute exact path="/addmeal" component={AddMeal} />
        <PrivateRoute exact path='/feedgigapet/:id' component={Feedgigapet} />
      </div>
    </Router>
    
  );
}

export default App;
