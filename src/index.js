import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
// import App from './App';
import Navbar from './Navbar'; 
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component should be rendered at the root */}
        {/* <Route path="/app" element={<App />} /> App component should be rendered at /app */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Get the width and height of the viewport
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// Log the viewport dimensions
console.log("Viewport width:", viewportWidth);
console.log("Viewport height:", viewportHeight);

// Function to update viewport dimensions
function updateViewportDimensions() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  console.log("Viewport width:", viewportWidth);
  console.log("Viewport height:", viewportHeight);
}

// Call the function initially
updateViewportDimensions();

// Listen for the resize event and call the function
window.addEventListener("resize", updateViewportDimensions);
