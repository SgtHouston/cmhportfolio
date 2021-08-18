import React from 'react'
// Step 1 - npm install react-router-dom and import
// Step 2 - Import React Router functionality components
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
// Step 3 - Import Bootstrap and install  w/ npm install react-bootstrap@next bootstrap@5.0.2
import 'bootstrap/dist/css/bootstrap.min.css';
// Step 4 = Import styled Components w/ npm install --save styled-components

import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact'

function App() {
  return (
    // Step 1
    <Router >
      {/* Header is above switch so it appears on every page */}
      < Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About  />
        </Route>

        <Route path="/projects">
          <Projects  />
        </Route>

        <Route path="/contact">
          <Contact  />
        </Route>

        <Route path="*">
          <Redirect to="/">
          {/* Redirect to homepage like so or leave an h1 page not found and a Link to return to homepage */}
          </Redirect>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
