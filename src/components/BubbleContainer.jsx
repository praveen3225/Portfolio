import React from "react";
import Bubble from "./Bubble";

const property=[
    {size:"3em",color: "radial-gradient(circle, rgba(255,255,255,1), rgba(173,216,230,0.6))",translationX:"0px",translationY:"0px",text:"java"},
    {size:"4em",color: "radial-gradient(circle, rgba(255,255,255,1), rgba(255,182,193,0.6))",translationX:"75px",translationY:"0px",text:"javascript"},
    {size:"2em",color: "radial-gradient(circle, rgba(255,255,255,1), rgba(135,206,250,0.6))",translationX:"153px",translationY:"52px",text:"C++"},
    {size:"4em",color: "radial-gradient(circle, #c0392b, #8e44ad",translationX:"156px",translationY:"-58px",text:"SpringBoot"},
    {size:"3em",color:"lime",translationX:"106px",translationY:"-118px",text:"Github"},
    {size:"3em",color:"gold",translationX:"44px",translationY:"-76px",text:"Node.js"},
    {size:"4em",color:"purple",translationX:"200px",translationY:"32px",text:"PostreSQL"},
    {size: "2.8em",color:"orange",translationX:"35px",translationY:"64px",text:"React"}
]

function BubbleContainer(){
    return (
        <div className="bubble-container-flex">
            <div className="bubble-container" style={{fontSize:"25px"}}>
            {property.map((item, index) => {
                    return <Bubble
                    key = {index}
                    size={item.size}
                    translationX = {item.translationX}
                    translationY = {item.translationY}
                    color = {item.color} 
                    text = {item.text}
                    />
                })}
            </div>
        </div>
    );
}

export default BubbleContainer;