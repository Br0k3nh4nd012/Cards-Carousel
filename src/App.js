import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './NavBar';

import ssc from "./ssc"
import sslc from './sslc';
import be from './be';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Route path = "/" exact component = {Home} />
        <Route path = "/ssc" exact component = {ssc} />
        <Route path = "/sslc" exact component = {sslc} />
        <Route path = "/be" exact component = {be} />
      </Router>
    </div>
  );
}

let Home = () => {
  return <div>
    <h2>RYD Internship Tasks</h2>
    <h5>please select any option from top right corner to render informations</h5>
    <h6>THANK YOU</h6>
  </div>
}

export default App;
