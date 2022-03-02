import React from "react";
import './navigation.css'

const Navigation = ({refreshPage, onRouteChange}) => {
    return(
    <div className=" nav grid2 tc">
        <div  className="">
            <h2 onClick={refreshPage}>NEW COLORS</h2>
        </div>

        <div>

        </div>

        <div className="buttons">
            <button className="f6 link dim ba bw2 ph3 pv2 mb2 dib dark-green br4"  type="submit" onClick={() => onRouteChange('easy')}>Easy</button>
            <button className="f6 link dim ba bw2 ph3 pv2 mb2 dib dark-green br4" type="submit" onClick={() => onRouteChange('hard')}>Hard</button>
        </div>
    </div>
    )
}

export default Navigation;




