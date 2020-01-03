import React from 'react';
import hotBird from '../static/spicy-chicken-cutout.png'
import '../css/Construction.css'

const Construction:React.FC=()=>{
    return(
        <div>
            <h1> Roasita's Is Under Construction!</h1>
            <h2> See You Soon!</h2>
            <img src={hotBird} id ='hot_bird' alt="hot bird" />
        </div>
    )
}

export default Construction