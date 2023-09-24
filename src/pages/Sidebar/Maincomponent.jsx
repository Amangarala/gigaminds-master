import React from "react";
import "./Maincomponent.css"; // Import your CSS file
import { w3_open } from "./Sidebarutils"; // Import the functions
function MainContent() {
  return (
    <div id="main">
      <div className="w3-teal">
        <button id="openNav" className="w3-button w3-teal w3-xlarge" onClick={w3_open}>
          &#9776;
        </button>
        <div className="w3-container">
          <h1>My Page</h1>
        </div>
      </div>

      <img src="img_car.jpg" alt="Car" style={{ width: "100%" }} />

      <div className="w3-container">
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default MainContent;
