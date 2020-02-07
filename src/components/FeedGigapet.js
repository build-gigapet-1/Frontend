import React, {useState, useEffect} from 'react';
import NavBarDashboard from './NavBarDashboard';
import axiosWithAuth from '../utils/AxiosWithAuth';
import FeedGigapetCard from './FeedGigapetCard'

// image imports
import deer from '../images/deer.png';
import gorilla from '../images/gorilla.png';
import shark from '../images/hammerhead.png';
import parrot from '../images/parrot.png';
import snake from '../images/snekk.png';
import crocodile from '../images/omgomg.png';

const FeedGigapet = props => {
    const [meals, setMeals] = useState([]);
    const [data,setData] = useState('');

    useEffect(() =>{

        const petId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
        console.log(petId)
        axiosWithAuth()
                .get(`/pets/${petId}`)
                .then(res => {
                    console.log('data ', res.data)
                    setMeals(res.data.meals);
                    setData(res.data)

        })
        .catch(err => console.log('Cannot fetch pets', err))
      
       
    }, []);
    const gigapetImg = () => {
        if (data.petImgSet === 'Gorilla') {
           return <img src={gorilla} alt='gorilla' />
       } if (data.petImgSet === 'Deer') {
           return <img src={deer} alt='deer' />
       } if (data.petImgSet === 'Shark') {
           return <img src={shark} alt='shark' />
       } if (data.petImgSet === 'Parrot') {
           return <img src={parrot} alt='parrot' />
       } if (data.petImgSet === 'Snake') {
           return <img src={snake} alt='snake' />
       } if (data.petImgSet === 'Crocodile') {
           return <img src={crocodile} alt='crocodile' />
       }
   }

    return (
        <div className='dashboard'>
        {console.log(meals)}
            <NavBarDashboard />
            <h2>{data.petName} is hungry. What are you and {data.petName} going to eat?</h2>
            {gigapetImg()}
            <div className='gigapets'>
            { meals.map(pet => (
                
                    <FeedGigapetCard name="petId" value={pet}  data={data}/>
                ))}
            </div>
            
            
        </div>
        
    )
}

export default FeedGigapet;