import React from 'react';
import Index from './pages/index';
import Login from './pages/meet/login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Allbooks from './pages/Allbooks';

function App() {
  return (
    [
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Allbooks' element={<Allbooks/>} />
          </Routes>
      </Router>
    </div>
    ]
    // <Event />

   
  );
}


export default App;