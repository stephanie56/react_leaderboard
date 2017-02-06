import React from 'react';

export default class Tab extends React.Component {

  handleChange(e){
    this.props.handleData(e.target.id);
  }

  render() {
    return (
      <div id="tab-wrapper">
      <div id="recent" className="tabs" onClick={this.handleChange.bind(this)}>Past 30 Days</div>
      <div id="alltime" className="tabs" onClick={this.handleChange.bind(this)}>All Time</div>
      </div>
    )
  }
}
