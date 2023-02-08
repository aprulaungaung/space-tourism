
import React, {useState} from 'react';

function Navbar(props){

    let stylist = {color:"#fff", fontWeight:"bold", letterSpacing:"0"};

    const [hm, setHm] = useState(true);

    const [dis, setDis] = useState(false);

    const [crw, setCrw] = useState(false);
    
    const [tech, setTech] = useState(false);

 function myFn1(){
    props.home();
    hmF();
 }

 function myFn2(){
    props.destination();
    disF();
 }

 function myFn3(){
    props.crew();
    crwF()
 }

 function myFn4(){

    props.technology();
    techF();
 }
  function hmF(){

    setHm(true);
    setDis(false);
    setCrw(false);
    setTech(false);
  }

  function disF(){

    setDis(true);
    setHm(false);
    setCrw(false);
    setTech(false);
  }

  function crwF(){

    setCrw(true);
    setHm(false);
    setDis(false);
    setTech(false);
  }

  function techF(){

    setTech(true);
    setHm(false);
    setDis(false);
    setCrw(false);
  }

 return <div className="nav-container">
        <nav className="menubar">

<input type="checkbox" id="checkbtn"/>
<label htmlFor="checkbtn" className="check">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
</label>

<div className="navbar-brand" ><img src="../assets/shared/logo.svg" alt="brand"/></div>


 

<div className="hr"></div>
<ul className="menu-package">


<li className="item">
<div className="sub-item" onClick={myFn1}><span style={stylist}>00</span> HOME</div>
</li>
<li className="item">

<div className="sub-item" onClick={myFn2}><span style={stylist}>01</span> DESTINATION</div>

</li>
<li className="item">

<div className="sub-item" onClick={myFn3}><span style={stylist}>02</span> CREW</div>

</li>
<li className="item">

<div className="sub-item" onClick={myFn4}><span style={stylist}>03</span> TECHNOLOGY</div>

</li>

</ul>


</nav>
{hm ? <hr className="line1"/> : null}

{dis ? <hr className="line2" /> : null}

{crw ? <hr className="line3"/> : null}

{tech ? <hr className="line4"/> : null}

    </div>
}

export default Navbar;