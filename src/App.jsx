import React,{useState} from 'react';
import Navbar from './Navbar';
import Front from './Front';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';

function App(){
   
   const[home, setHome] = useState(true)
   const[destination, setDestination] = useState(false);
   const[crew, setCrew] = useState(false);
   const[technology,setTechnology] = useState(false);

   function handleHome(){

    setHome(true);
    setDestination(false);
    setCrew(false);
    setTechnology(false)

   }

   function handleDestination(){

      setHome(false);
      setDestination(true);
      setCrew(false);
      setTechnology(false)
   }

   function handleCrew(){
    setCrew(true);
    setHome(false);
    setDestination(false);
    setTechnology(false)
   }

   function handleTechnology(){

    setTechnology(true)
    setHome(false);
    setDestination(false);
    setCrew(false);


   }

   
  

    return <div>

        <Navbar 
         home = {handleHome}
         destination = {handleDestination}
         crew = {handleCrew}
         technology = {handleTechnology}

        />
        {home ? <Front/>: null}
        
        {destination ? <Destination /> : null}
        
        {crew ? <Crew /> : null}

        {technology ? <Technology /> : null}
        
    </div>
}

export default App;