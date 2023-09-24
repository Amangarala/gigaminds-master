// SidebarUtils.js

export function w3_open() {
    const main = document.getElementById("main");
    const mySidebar = document.getElementById("mySidebar");
    const openNav = document.getElementById("openNav");
  
    if (main && mySidebar && openNav) {
      main.style.marginLeft = "25%";
      mySidebar.style.width = "25%";
      mySidebar.style.display = "block";
      openNav.style.display = 'none';
    }
  }
  
  export function w3_close() {
    const main = document.getElementById("main");
    const mySidebar = document.getElementById("mySidebar");
    const openNav = document.getElementById("openNav");
  
    if (main && mySidebar && openNav) {
      main.style.marginLeft = "0%";
      mySidebar.style.display = "none";
      openNav.style.display = "inline-block";
    }
  }
  