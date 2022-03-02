import React from "react";
import './header.css'

const Header = ({getRandomRgb}) => {
    
      
    // for (var i = 0; i < 10; i++) {
    // console.log(getRandomRgb());
    // }
    return(
    <div className="tc header-box">
        <h1>THE GREAT</h1>
        <div className="rgb">{getRandomRgb}</div>
        <h1>COLOR GAME</h1>
    </div>
    )
}

export default Header;




