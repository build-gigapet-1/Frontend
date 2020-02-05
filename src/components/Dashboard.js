import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import GigapetCard from './GigapetCard';
import axiosWithAuth from '../utils/AxiosWithAuth';

const Dashboard = props => {
    const [pets, setPets] = useState();

    useEffect (() => {
        console.log(props)
        axiosWithAuth()
        .get('/pets/')
        .then(res => {
            console.log(res.data)
            // setPet state to res.data
        })
        .catch(err => console.log('Cannot fetch pets', err))
    }, [])
    
    const onClick = e => {
        window.location.href='/creategigapet'
    }

    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <Button className='addPetBtn' onClick={onClick} color="success">Add a new Gigapet</Button>
            <GigapetCard />
        </div>
        
    )
}

export default Dashboard;