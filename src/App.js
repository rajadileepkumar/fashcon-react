import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/portfolio/:id" exact component={Portfolio} />
          <Footer/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
