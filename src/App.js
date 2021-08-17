import React from 'react'
// Step 1 - npm install react-router-dom and import 
import { BrowserRouter as Router } from 'react-router-dom';


import './App.css';

function App() {
  return (
    // Step 1
    <Router >
      <div className="App">
        Hello World
      </div>
    </Router>
  );
}

export default App;
