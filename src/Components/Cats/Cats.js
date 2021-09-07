import React, { Component } from 'react';
import CatIndex from './CatIndex'
 
class Cats extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { simpleMessage: "Hello Garfield!!!"};
  // }

  render(){
    return (
      <div className="main">
        <div className="mainDiv">
          <CatIndex />
          {/* <h4> 
            {this.state.simpleMessage}
          </h4> */}
        {/* <Container className="App">
        <br/>
        <h1 className="App-intro">
          To complete this challenge, complete and fix the existing code to have it do the following:
        </h1>
 
        <hr />
          
         <ul>
          <li>Render the list of cat breeds to the screen</li>
          <li>Use props correctly</li>
          <li>Use .map() correctly</li>
          <li>Ensure there are no errors</li>
         </ul>
         <hr />
        {/* <CatIndex /> */}
      {/* </Container> */}
    {/* ); */} */{'}'}
        </div>
      </div>
    );   
  }
}
 
export default Cats;
