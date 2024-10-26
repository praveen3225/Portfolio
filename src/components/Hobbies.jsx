import React from "react";
import PhotoGrid from "./PhotoGrid";
function Hobbies()
{
    return (
        <>
            <div className="hobbies-bg">
                <h1 className="hobbies-heading">Hobbies</h1>
                <p className="hobbies-description">Art has been a journey that constantly surprises me. Each line, each stroke, becomes a small adventure into something unknown. There's something deeply satisfying about capturing a moment, a feeling, or even a thought that words sometimes can’t express. Art for me is a companion, a way to communicate with myself and the world, and with each piece, I feel a little closer to understanding my own voice.</p>
                <PhotoGrid></PhotoGrid>
            </div>
        </>
    );
}

export default Hobbies;