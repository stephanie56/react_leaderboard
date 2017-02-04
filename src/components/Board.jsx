import React from 'react';

export default class Board extends React.Component {
  render() {
    return (
      <div id="board">
      <h1>{ this.props.title }</h1>
      <div>{ this.props.data.map(function(user){
          return(
            <div key={user.username}>
              {user.username}
            </div>
          )
        }) }</div>
      </div>
    )
  }
}

// Board.propTypes = {
//   data: React.PropTypes.array
// };
