import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import GigapetCard from './GigapetCard';
import axiosWithAuth from '../utils/AxiosWithAuth';

const Dashboard = props => {
    const [pets, setPets] = useState([]);

    useEffect (() => {
        console.log(props)
        axiosWithAuth()
        .get(`/pets/`)
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
            <Button className='addPetBtn' onClick={onClick} color="success">Add a new Gigapet</Button>
            <div className='gigapets'>
                {pets.map(pet => (
                    <GigapetCard
                    key={pet.petId}
                    petName={pet.petName}
                    petScore={pet.petScore}
                    petImgSet={pet.petImgSet}
                    />
            ))}
            </div>
            
            
        </div>
        
    )
}

export default Dashboard;