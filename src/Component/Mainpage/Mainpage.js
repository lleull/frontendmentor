import React from "react";
import "./main.css";
import currency from './image-currency.jpg'
import plane from './image-plane.jpg'
import confetti from './image-confetti.jpg'
import online from './icon-online.svg'
import api from './icon-api.svg'
import onboarding from './icon-onboarding.svg'
import budgeting from './icon-budgeting.svg'
import food from './image-restaurant.jpg'
import mockup from "./image-mockups.png";
const Mainpage = () => {
  return (
    <div className="mainpage">
        <div className="section">

       
      <div className="main">
        <div className="left">
          <div>
            <h1>Next Generation digital banking</h1>
            <p>
              Take your financial life online Your Easybank account will be
              one-stop-shop for spending,saving,budgeting,investing, and much
              more
            </p>
            <button>Request page</button>
          </div>
        </div>
        <img className="bigoneimg" src={mockup} alt="image1" />
      </div>

      <div className="easybank">
        <div className="easytext">
        <h1>Why Choose Bank?</h1>
        <p className="easyp">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p  className='easyp'>Control Your financial like never before </p>
        </div>
   
      </div>
      <div className="cards">
      <div className="card">
        <img  style={{width:'30px', height:'30px'}} src={onboarding} alt="j"/>
        <div className="card2p">
        <h3>Online Banking</h3>

        <p>our modern we and mobile application allows yot to keep track of your financial wherever you are in the world </p>

        </div>     
      </div>
      <div className="card">
        <img   style={{width:'30px', height:'30px'}} src={online} alt="j"/>
        
        <div className="card2p">
        <h3>Online Banking</h3>

        <p>our modern we and mobile application allows yot to keep track of your financial wherever you are in the world </p>

        </div>
      </div>
      <div className="card">
        <img style={{width:'30px', height:'30px'}} src={api} alt="j"/>
        <div className="card2p">
        <h3>Online Banking</h3>

        <p>our modern we and mobile application allows yot to keep track of your financial wherever you are in the world </p>

        </div>
     
      </div>
      <div className="card">
        <img  style={{width:'30px', height:'30px'}} src={budgeting} alt="j"/>
        <div className="card2p">
        <h3>Online Banking</h3>

        <p>our modern we and mobile application allows yot to keep track of your financial wherever you are in the world </p>

        </div>     
      </div>
      </div>
      <h4 className="thirdhead">Latest Article</h4>
      <div className="third">
      
      <div className="card1">
         <div className="box">
            <img className="imgcur" src={currency} alt=""/>
         </div>
         <div className="card1p">
         <p className="para">by clairy robens</p>
         <p className="para">the world is getting smaller and smaller we need to change the world curriency to digital we must start getting ou hands on it</p>
         </div>
     
      </div>
      <div className="card1">
         <div className="box">
            <img className="imgcur" src={food} alt=""/>
         </div>
         <div className="card1p">
         <p className="para">by clairy robens</p>
         <p className="para">the world is getting smaller and smaller we need to change the world curriency to digital we must start getting ou hands on it</p>
         </div>
      </div>

      <div className="card1">
         <div className="box">
            <img className="imgcur" src={plane} alt=""/>
         </div>
         <div className="card1p">
         <p className="para">by clairy robens</p>
         <p className="para">the world is getting smaller and smaller we need to change the world curriency to digital we must start getting ou hands on it</p>
         </div>
      </div>
      <div className="card1">
         <div className="box">
            <img className="imgcur" src={confetti} alt=""/>
         </div>
         <div className="card1p">
         <p className="para">by clairy robens</p>
         <p className="para">the world is getting smaller and smaller we need to change the world curriency to digital we must start getting ou hands on it</p>
         </div>
      </div>
      </div>
     
      </div>
    </div>
  );
};

export default Mainpage;
