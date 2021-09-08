import React, { Component } from 'react'; // props
import CatIndex from './CatIndex';

export default class CatList extends Component {

render() {
  return (
    <div className="main">
      <div className="mainDiv">
        <li>
          {this.state.breeds.map()}
        </li>
      </div>
    </div>
  )
}
}