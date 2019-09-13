import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Topics from './components/Topics'
import Home from './components/Home'

import './App.css';
import BasicForm from './components/BasicForm';
import Uncontrolled from './components/Uncontrolled'
import HOCExample from './components/HOCExample'
import DataFetch from './components/DataFetch';

// React Router: https://reacttraining.com/react-router/web/example/basic
// QUESTION Why use React Router? What does it help us with? 
function App() {
  return (
    <Router>
      <div>
        {/* Nesting it this way allows us to always have a header */}
        <Header />

{/* QUESTION What is Route exact path??? */}
{/* If we have any other component but no Route, the page doesn't exist.  */}
{/* A better way rather than naming the Components folder is calling it the Pages folder (ala Gatsby) */}
        <Route exact path="/" component={Home} /> 
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/basicform" component={BasicForm} />
        <Route path="/uncontrolled" component={Uncontrolled} />
        <Route path="/hocexample" component={HOCExample} />
        <Route path="/datafetch" component={DataFetch} />
      </div>
    </Router>
  );
}

export default App;
