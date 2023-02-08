
import React,{useState,useEffect} from 'react';



function Technology(){

    

    

    let myStyle = {
        backgroundColor: "#fff",
        color: "#1A120B"
    };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    
       
        useEffect(()=>{

            let alterSize = () =>{
                setScreenWidth(window.innerWidth);
            }
            window.addEventListener("resize", alterSize);

            
        })

       
     
    function handleStep1(){
        setStep1(true);
        setStep2(false);
        setStep3(false);
    }

    function handleStep2(){

        setStep2(true);
        setStep1(false);
        setStep3(false);
    }

    function handleStep3(){
        setStep3(true);
        setStep1(false);
        setStep2(false);
    }

    return <div className="technology-box">
      
    <div className="inner-package">
    <p className="launch"><span style={{opacity:"0.5"}}>03</span> SPACE LAUNCH 101</p>
    <div className="left-pocket">
        <div className="side-control">
            <div className="tune"  style={step1 ? myStyle: null} onClick={handleStep1}>1</div>
            <div className="tune" style={step2 ? myStyle: null} onClick={handleStep2}>2</div>
            <div className="tune" style={step3 ? myStyle: null} onClick={handleStep3}>3</div>
        </div>
        {step1 ? <div className="procedure">
            <p>The terminology... </p>
            <h1>Launch vehicle</h1>
            <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
        
        :null}

        {step2 ? <div className="procedure">
            <p>The terminology...</p>
            <h1>Spaceport</h1>
            <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
        </div>
        
        :null}

        {step3 ? <div className="procedure">
            <p>The terminology...</p>
            <h1>Space capsule</h1>
            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </div>
        
        :null}
        
    </div>
    <div className="right-pocket">
        <div className="photo-container">
        
            {(step1 && screenWidth >768) ?<img src="../assets/technology/image-launch-vehicle-portrait.jpg" className = "space-ship"alt="space-ship"/> : null}

            {(step1 && screenWidth <= 768) ?<img src="../assets/technology/image-launch-vehicle-landscape.jpg" className = "space-ship"alt="space-ship"/> : null}
            
            {(step2 && screenWidth > 768) ? <img src="../assets/technology/image-spaceport-portrait.jpg" className="space-ship" alt="space-ship"/> : null}
           
            {(step2 && screenWidth <= 768) ? <img src="../assets/technology/image-spaceport-landscape.jpg" className="space-ship" alt="space-ship"/> : null}
           
            {(step3 && screenWidth >768) ? <img src="../assets/technology/image-space-capsule-portrait.jpg" className="space-ship" alt="space-ship"/> : null}
            
            {(step3 && screenWidth <=768) ? <img src="../assets/technology/image-space-capsule-landscape.jpg" className="space-ship" alt="space-ship"/> : null}
        </div>
    </div>

    </div>

    </div>
}


export default Technology;