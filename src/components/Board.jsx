import React from 'react';

export default class Board extends React.Component {
  render() {

    return (
      <div id="board">
      <h1>{ this.props.title }</h1>
      <div>{ this.props.content }</div>
      </div>
    )
  }
}
