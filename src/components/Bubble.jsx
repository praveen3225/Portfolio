import React from "react";

function Bubble(props)
{       
        const bubbleStyle = {
        '--translationX': props.translationX,
        '--translationY': props.translationY,
        width: props.size,
        height: props.size,
        background: props.color,
        position:'absolute',
        transform: `translate(${props.translationX}, ${props.translationY})`,
        borderRadius: '50%',
        boxShadow: '0 8px 15px  rgba(0, 0, 0, 0.2), inset 0 5px 10px rgba(255, 255, 255, 0.7)',
        opacity: 0.85,
        display : "flex",
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        color: 'black', // Text color
        fontSize: '25px', // Adjust as needed
        textAlign: 'center',
    };
    return (
        <>
            <div className="bubbleColor" style={bubbleStyle}>
                <div className="fontStyle">{props.text}</div>
            </div>
        </>
    )
}

export default Bubble