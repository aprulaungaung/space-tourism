import React,{useState} from 'react';

function Crew(){

 
const [one, setOne] = useState(true);

const [two, setTwo] = useState(false);

const [three, setThree] = useState(false);

const [four, setFour] = useState(false);

function handleOne(){

    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
}

function handleTwo(){

    setTwo(true)
    setOne(false);
    setThree(false);
    setFour(false);
}

function handleThree(){

    setThree(true)
    setOne(false);
    setTwo(false);
    setFour(false);
}

function handleFour(){

    setFour(true);
    setOne(false);
    setTwo(false);
    setThree(false);
}
 
   
 
   
    return <div className="crew-container">

        <div className="crew-list">

        <div className="position">

 {one ? <div className="left-inner">

<p>02 MEET YOUR CREW</p>

   <h4>Pilot</h4>

   <h1>Victor Glover</h1>


   <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>

</div> 
 
 : null}

 {two ?<div className="left-inner">

<p>02 MEET YOUR CREW</p>

   <h4>Commander</h4>

   <h1>Douglas Hurley</h1>

   <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>

</div> 
 
 :null}

 {three ?<div className="left-inner">

<p>02 MEET YOUR CREW</p>

   <h4>Mission Specialist</h4>

   <h1>Mark Shuttleworth</h1>

   
   <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>

</div> 
 
 :null}

 {four ?<div className="left-inner">

<p>02 MEET YOUR CREW</p>

   <h4>Flight Engineer</h4>

   <h1>Anousheh Ansari</h1>

   <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>

</div> 
 
 :null}
     
            
            <div className="button-pocket">

            <div className="button"  style={{backgroundColor: one? "#fff" : null}}onClick={handleOne}></div>
            <div className="button"  style={{backgroundColor: two? "#fff" : null}}onClick={handleTwo}></div>
            <div className="button"  style={{backgroundColor: three? "#fff" : null}}onClick={handleThree}></div>
            <div className="button"  style={{backgroundColor: four? "#fff" : null}}onClick={handleFour}></div>

            </div>

        
           
        </div>
        <div className="profile">

            <div className="photo-frame">

          {one ? <img src="../assets/crew/image-victor-glover.png" className="crew" alt="crew"/> : null}

          {two ? <img src="../assets/crew/image-douglas-hurley.png" className="crew" alt="crew"/> : null}
          
          {three ? <img src="../assets/crew/image-mark-shuttleworth.png" className="crew" alt="crew"/> : null}
          
          {four ? <img src="../assets/crew/image-anousheh-ansari.png" className="crew" alt="crew"/> : null}
            
            </div>
        </div>

        </div>
    </div>
}


export default Crew;