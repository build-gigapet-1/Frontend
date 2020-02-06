import React, {useState, useEffect} from 'react';
import NavBarDashboard from './NavBarDashboard';
import axiosWithAuth from '../utils/AxiosWithAuth';
import FeedGigapetCard from './FeedGigapetCard'

const Dashboard = props => {
    const [pets, setPets] = useState([]);

    useEffect (() => {
        console.log(props)
        axiosWithAuth()
        .get(`/pets/meals`)
        .then(res => {
            console.log(res.data)
            setPets(res.data)
        })
        .catch(err => console.log('Cannot fetch pets', err))
    }, [])
    
    const onClick = e => {
        window.location.href='/creategigapet'
    }

    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <div className='gigapets'>
            { /*pets.map(pet => (
                    <FeedGigapetCard name="petId" value={pet.petId} {pet.petName} />
                ))*/}
            </div>
            
            
        </div>
        
    )
}

export default Dashboard;