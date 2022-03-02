import React from "react";
import 'tachyons'
import './Cards.css'

const Cards = ({c_card, rand,onClicklistener}) => {
    return(
        <div className="tc card">
            <div className=" dib ma3 br3 pa3 grow tc first" style={{backgroundColor: c_card }} onClick={()=>onClicklistener(c_card)}>
                
            </div>
            
        </div>
    )
}

export default Cards;




