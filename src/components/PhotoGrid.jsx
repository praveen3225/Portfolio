import React from "react";

function PhotoGrid()
{
    return (
        <div className="d-flex justify-content-center" style={{marginTop:"50px"}}>
        <div className="container-grid shadow-lg">
          <div className="img1">
            <img src="./drawing2.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 2" />
          </div>
          <div className="img2">
            <img src="./drawing1.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 1" />
          </div>
          <div className="img3">
            <img src="./drawing3.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 3" />
          </div>
          <div className="img4">
            <img src="./drawing7.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 7" />
          </div>
          <div className="img5">
            <img src="./drawing4.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 4" />
          </div>
          <div className="img6">
            <img src="./drawing6.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 6" />
          </div>
          <div className="img7">
            <img src="./drawing5.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="drawing 5" />
          </div>
        </div>
      </div>
      
    );
}

export default PhotoGrid;