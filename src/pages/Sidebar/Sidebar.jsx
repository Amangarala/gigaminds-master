import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // Import your CSS file

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Add a useEffect to handle the initial state on page load
  useEffect(() => {
    openSidebar(); // Automatically open the sidebar on page load
  }, []);

  return (
    <div>
      <div className={`w3-teal ${isSidebarOpen ? "shifted" : "" }`}>
        <button className="w3-button w3-teal w3-xlarge" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>

      <div className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${isSidebarOpen ? "open" : ""}`}>
        <button className="w3-bar-item w3-button w3-large" onClick={closeSidebar}>
          Close &times;
        </button>
        <a href="#" className="w3-bar-item w3-button"> Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>

      <div id="main" className={isSidebarOpen ? "shifted-main" : ""}>
      </div>
    </div>
  );
}

export default Sidebar;
