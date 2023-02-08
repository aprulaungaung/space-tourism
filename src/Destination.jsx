import React, {useState} from 'react';

function Destination(){

    const[moon, setMoon] = useState(true);

    const[mars, setMars] = useState(false);

    const[europa, setEuropa] = useState(false);

    const[titan, setTitan] = useState(false);

    function handleMoon(){
        setMoon(true);
        setMars(false);
        setEuropa(false);
        setTitan(false);

    }

    function handleMars(){
        setMars(true);
        setMoon(false);
        setEuropa(false);
        setTitan(false);
        
    }

    function handleEuropa(){
        setEuropa(true);
        setMoon(false);
        setMars(false);
        setTitan(false);
    }

    function handleTitan(){

        setTitan(true);
        setMoon(false);
        setMars(false);
        setEuropa(false);
        
    }



    return <div className= "destination">
   
   <div className="master-window">

   <div className="left-window">

<div className="planet-container">

  <p>01 PICK YOUR DESTINATION</p>

{moon ? <img  src="../assets/destination/image-moon.png" className="planet" alt="moon"/> : null}

{mars ?<img className="planet" src="../assets/destination/image-mars.png" alt="mars"/> : null }

{europa ? <img  src = "../assets/destination/image-europa.png" className="planet" alt="europa"/> : null }

{titan ? <img src = "../assets/destination/image-titan.png" className="planet" alt="titan"/> : null}
  
 </div>
    

   </div>
   <div className="right-window">

   <div className="sub-title">

   <ul className="sub-menu">

     <li onClick={handleMoon}>MOON</li>

     <li onClick = {handleMars}>MARS</li>

     <li onClick = {handleEuropa}>EUROPA</li>

     <li onClick = {handleTitan}>TITAN</li>

    </ul>

   </div>
   
    <div className="description">

    {moon ? <div>

    <h1>MOON</h1>

    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. </p>

    <hr />

    <div className = "moon-footer">

        <div className="distance">

            <p>Avg. distance</p>

            <h4>384,400 km</h4>

        </div>
        <div className="time">

            <p>Est. travel time</p>
            <h4>3 days</h4>

        </div>
    </div>

</div> 
    : null}

    {mars ? <div>

    <h1>MARS</h1>

    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>

    <hr />

    <div className="mars-footer"> 

        <div className="distance">

            <p> Avg. distance</p>

            <h4>225 mil. km </h4>

        </div>

        <div className="time">

            <p>Est. travel time</p>

            <h4>9 months</h4>

        </div>

    </div>

    </div> 

    : null}

    {europa ? <div>

    <h1>EUROPA</h1>

    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. </p>

    <hr />

    <div className="footer"> 

        <div className="distance">

            <p> Avg. distance</p>

            <h4>628 mil. km</h4>

        </div>

        <div className="time">

            <p>Est. travel time</p>

            <h4>3 years</h4>

        </div>

    </div>

    </div> 

    : null}

    {titan ? <div>

    <h1>TITAN</h1>

    <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. </p>

    <hr />

    <div className="footer"> 

        <div className="distance">

            <p>Avg. distance</p>

            <h4>1.6 bil. km</h4>

        </div>

        <div className="time">

            <p>Est. travel time</p>

            <h4>7 years</h4>

        </div>

    </div>

    </div> 
    
    : null}

    

    </div>

   </div>

   </div>
    
    </div>
}


export default Destination;