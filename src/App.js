import React, { Component } from 'react';


import skills from './data/skills';

export default class App extends Component {
   render (){
    return(
      <div className="App">
       <h3>welcome to parent</h3>

      <skills/>
        
        </div>
    )
   }
}


