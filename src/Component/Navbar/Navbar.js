import React from "react";
import "./Navbar.css";
import { useState } from "react";
import icons from "./icon-menu.svg";
import cancel from "./icon-menu-close.svg";
import logo from './logo.svg'
const Navbar = (props) => {
  const [tooglemenu, settooglemenu] = useState(false);
  
  return (
    <>
    {tooglemenu ? <div className="blacker"></div>:''}
      <div className="header">
        <div className="Logo">
          <img style={{width: '70px', height:'20px'}} src={logo} alt="data"/>
      
        </div>
        <div className="classul">
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Contact</li>
          <li className="list">Blog</li>
          <li className="list">Careers</li>
        </div>
        <button className="request">Request Inivite</button>

        <div className="icon">
         {!tooglemenu ? <img
            onClick={() => settooglemenu(true)}
            className="iconspage"
            src={icons}
            alt="datas"
          />:
            <img
            onClick={() => settooglemenu(false)}
            className="iconscancel"
            src={cancel}
            alt="datas"
          />}

        </div>
      </div>
      {tooglemenu ? (
        <div className="toogle">
        
         
          <div className="tooglelist">
            <li className='toggl'>Home</li>
            <li className='toggl'>About</li>
            <li className='toggl'>Contact</li>
            <li className='toggl'>Blog</li>
            <li className='toggl'>Carrers</li>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
