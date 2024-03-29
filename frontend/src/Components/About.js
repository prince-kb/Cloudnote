import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='my-5 container text-center'>
      <h1 className="h1 ">ABOUT PAGE</h1>
      <h2 className="h3">This is my About Page.</h2>
      <h2 className="h3">Here are my details</h2>
      
        
        <details>
        <summary className='fs-1'>ME  </summary>
        <h3 className="h3">I am currently a 3rd bachelor from NETAJI SUBHASH ENGINEERING COLLEGE ,KOLKATA and department COMPUTER SCIENCE </h3>
        <h3 className="h3">I belong from Jhajha,Bihar a town at the Bihar-Jharkhand border near Deoghar(BabaDham).</h3>
        <h3 className="h3">I followed CBSE curriculum for my studies.</h3>
        <h3 className="h3">I completed my Intermediate schooling from Diksha International School, Bhagalpur and secured 90% marks there.</h3>
        <h3 className="h3">My matriculation was from my Sardonyx School, Jhajha -my hometown and i have chosen Engineering over government jobs.</h3>
        <h3 className="h3">I always been a tough guy and tried not to follow simple tasks for life.</h3>
        <h3 className="h3">That's all for the day</h3>
        <h3 className="h3">You can contact me here.</h3>
        <h3 className="h3"><Link to="contact" className={``}>Contact</Link></h3>
        <h1 className="h1">Thank You</h1>.
        </details> 
    </div>
  )
}

export default About
