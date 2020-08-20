import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './data/intro';
import Skills from './data/skills';
import Projects from './data/projects';
import Education from './data/education';
import Interest from './data/interest';

export default class App extends Component {
   render (){
    return(
      <div className="container">
      <div style={{width: '50%',position: 'absolute',left: '25%'}}>

        <Intro/>
        <Skills/>
        <Projects/>
        <Education/>
        <Interest/>
      </div>
      </div>
    )
   }
}


