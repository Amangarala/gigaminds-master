import React from 'react'
import Courses from './Courses-Section/index.jsx';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar/Sidebar.jsx';


const Allbooks = () => {
  return (
    <>
       <Navbar/>
       <Sidebar/>
       <br/>
        <Courses/>
        <Courses/>
        <Courses/>
        <Courses/>
    </>
  )
}

export default Allbooks