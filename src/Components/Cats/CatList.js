import React, { Component } from 'react';
import { CatIndex } from './CatIndex'

export class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { catHello: "Hello Garfield!" }
  }
}

render() {
  return (
    <div className="main">
      <div className="mainDiv">
        {/* {props.breeds.Map(cat => <li>cat</li>)} */}
        {props.breeds.Map(cat => <li>cat</li>)}
      </div>
    </div>
  )
}