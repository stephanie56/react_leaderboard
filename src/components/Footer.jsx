import React from 'react';

export default class Footer extends React.Component {
  render() {

      return (
        <div id="footer">Coded by { this.props.author}</div>
      )
  }
}
