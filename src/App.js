import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import {ProjectProvider} from './components/ProjectContext/ProjectContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import background from '../src/assets/WebsiteBackground.png'


function App() {
  return (
    <Router>
      <div style={
        {backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        color: '#CCC5B9'}}>
        <Nav />
          <Container>
          <ProjectProvider>
          <Route exact path="/" component={Portfolio} />
          </ProjectProvider>      
          </Container>    
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
