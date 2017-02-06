import React from 'react';

export default class Tab extends React.Component {

  handleChange(clicked_id){
    this.props.handleData(clicked_id);
  }

  render() {
    return (
      <div>
      <button id="recent" type="button" onClick={this.handleChange(this.id)}>Last 30</button>
      <button id="alltime" type="button" onClick={this.handleChange(this.id)}>All Time</button>
      </div>
    )
  }
}
