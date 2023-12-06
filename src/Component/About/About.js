import React from 'react'
import i1 from './icon-instagram.svg'

import i4 from './icon-pinterest.svg'
import i5 from './icon-twitter.svg'
import i6 from './icon-youtube.svg'
import './About.css'
const About = () => {
  return (
    <div className='about'>
<div className='about1'>
    
    <ul>
        <h2>EasyBank</h2>
        <div> <li>
            <img src={i1} alt='1'/>
           
            <img src={i4} alt='2'/>
            <img src={i5} alt='3'/>
            <img src={i6} alt='4'/>
            
            </li>
            
        </div>
       
    
    </ul>

    <ul>
        <li>About us</li>
        <li>Contact</li>
        <li>Blog</li>
        
    </ul>
    <ul>
        <li>About us</li>
        <li>Contact</li>
        <li>Blog</li>
        
    </ul>
  

</div>
<div className='lastpage'>
<button>Register invite</button>
<p>@EasyBank. All Right Reserver</p>
   </div>
    </div>
  )
}

export default About