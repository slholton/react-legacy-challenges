import React, { Component } from 'react'; // props

export default class CatList extends Component {

render() {
  return (
    <div className="main">
      <div className="mainDiv">
        <li>{this.props.breeds.map()}</li>
      </div>
    </div>
  )
}
}