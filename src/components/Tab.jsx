import React from 'react';

export default class Tab extends React.Component {

  handleChange(e){
    this.props.handleData(e.target.id);
  }

  render() {
    return (
      <div>
      <button id="recent" type="button" onClick={this.handleChange.bind(this)}>Last 30</button>
      <button id="alltime" type="button" onClick={this.handleChange.bind(this)}>All Time</button>
      </div>
    )
  }
}
