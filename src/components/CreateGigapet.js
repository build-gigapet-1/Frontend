import React, { useState } from 'react'
// import {Link} from 'react-router-dom';
import NavBarDashboard from './NavBarDashboard';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import gigapet1 from '../images/gorilla.png';
import gigapet2 from '../images/hammerhead.png';
import gigapet3 from '../images/omgomg.png';
import gigapet4 from '../images/parrot.png';
import gigapet5 from '../images/snekk.png';
import gigapet6 from '../images/deer.png';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

const items = [
  {
    name: 'gorilla',
    src: `${gigapet1}`,
    altText: 'Slide 1',
    caption: 'Gigapet 1'
  },
  {
    name: 'shark',
    src: `${gigapet2}`,
    altText: 'Slide 2',
    caption: 'Gigapet 2'
  },
  {
    name: 'crocodile',
    src: `${gigapet3}`,
    altText: 'Slide 3',
    caption: 'Gigapet 3'
  },
    {
    name: 'parrot',
    src: `${gigapet4}`,
    altText: 'Slide 4',
    caption: 'Gigapet 4'
  },
  {
    name: 'snake',
    src: `${gigapet5}`,
    altText: 'Slide 5',
    caption: 'Gigapet 5'
  },
  {
    name: 'deer',
    src: `${gigapet6}`,
    altText: 'Slide 6',
    caption: 'Gigapet 6'
  }
];

// let Body = styled.body`
// box-sizing: border-box;
// `;

let Header = styled.header`
height: 120px;
background: #6C46A2;
display: flex;
justify-content:center;
align-items: center;
`;

let InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2%;
`;

let Buttons = styled.button`
width: 20%;
background: #6C46A2;
color: white;
font-size: 1.5rem;
margin: 1% 0;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid gray;
cursor: pointer;
text-shadow: 2px 2px black;
box-shadow: 1px 1px 3px black;
&:hover{
  background: red;
  opacity: .5;
  box-shadow: 1px 1px 5px black;
}
`;


function CreateGigapet() {
    // Carousel.propTypes ={  ride: PropTypes.oneOf(['carousel', false]),}
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
    let {register, handleSubmit} = useForm();
  const [gigapet,setGigapet] =useState({
    petName: null,
    petScore: '9',
    petImgSet: 'Gorilla'

  })

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setGigapet({
            ...gigapet,
            [e.target.name]: e.target.value
        })
    }

    const addGigapet = e =>{
      console.log(gigapet)
      axiosWithAuth()
          .post('/pets/', gigapet)
          .then(res=>{
            console.log(res)
          }
          ).catch(err => console.log(err))


    }

  const slides = items.map((item) => {

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
    <h2>{item.name}</h2>
        {/* <CarouselCaption captionHeader={item.caption} /> */}
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        {/* <CarouselCaption  captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
      <div>
        <Header>
            <NavBarDashboard/>
        </Header>
        <h1 style={{margin: '2% 0'}}>Choose your GIGAPET</h1>
        <Carousel
            interval = {false}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className='controlCarousel' direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <form onSubmit={handleSubmit(addGigapet)}>
        <InputContainer>
            <input
            name='petName'
            ref={register({ required: true })}
            className='form-input'
            placeholder='Enter your GIGA name'
            value={gigapet.petName} 
            onChange={handleChange}
            />
            <br/>
            <select
            className='form-input'
            name='petImgSet'
            onChange={handleChange}
            >
                <option value='gorilla' name='petSetImg' >Gorilla</option>
                <option value='Shark' name='petSetImg' >Shark</option>
                <option value='Crocodile' name='petSetImg'>Crocodile</option>
                <option value='Parrot' name='petSetImg'>Parrot</option>
                <option value='Snake' name='petSetImg'>Snake</option>
                <option value='Deer' name='petSetImg'>Deer</option>
            </select> 
            <br/>
            <Buttons type="submit" name="Register">Create Giga Pet</Buttons>
          </InputContainer>
        </form>
     </div>
  );
}

export default CreateGigapet;

// let Body = styled.body`
// box-sizing: border-box;
// `;

// let Header = styled.header`
// height: 120px;
// background: #6C46A2;
// display: flex;
// `;

// let Form = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

// let Buttons = styled.button`
// width: 20%;
// background: #6C46A2;
// color: white;
// font-size: 1.5rem;
// margin: 1% 0;
// display: flex;
// flex-direction: column;
// align-items: center;
// border: 1px solid gray;
// cursor: pointer;
// text-shadow: 2px 2px black;
// box-shadow: 1px 1px 3px black;
// &:hover{
//   background: red;
//   opacity: .5;
//   box-shadow: 1px 1px 5px black;
// }
// `;

// let InputDisplay = styled.div`
// display: flex;
// `;

// let InputCont = styled.div`
// display: flex;
// `;

// let Input = styled.input`
// height: 100px;
// border: 1px solid red;
// `;

// function CreateGigapet(){
//     let {register, handleSubmit} = useForm();
    
//     return (
//         <Body>
//             <Header>
//                 <NavBar/>
//             </Header>
//             <form>
//                 <InputDisplay>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>
//                     <div className='input-container'>
//                         <Input type='radio' />
//                         <img src='../images/gorilla.png'/>
//                     </div>

//                 </InputDisplay>
//                 <div>
//                     <input
//                     name='gigaName'
//                     ref={register({ required: true })}
//                     className='form-input'
//                     placeholder='Enter your GIGA name'
//                     />
//                     <Buttons type="submit" name="Register">Create Giga Pet</Buttons>
//                 </div>
//             </form>
//         </Body>
//     )
    
// }

// export default CreateGigapet;