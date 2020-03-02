import React from 'react'
import hotBird from '../../static/spicy-chicken-cutout.png'
import "./About.css"


const About:React.FC =()=>{
    return(
            <div className = "about" id='about'>
                <img className = "hot_bird" src={hotBird} alt="hot bird"/>
                <h1 id= "about_title"> Roasita's</h1>
                <h2>A Quest For Roast Chicken</h2>
                <p> 
                At Roasita's, serving you our best roast chicken is our mission.<br/>
                Our mission is about your health,<br/>
                every bite you take will be delicious, healthy and guilt-free!
                </p>
            </div>
    )
}
export default About
