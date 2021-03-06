import React from 'react';

export default class Board extends React.Component {

  render() {
    return (
      <div id="board">
      <h1>{ this.props.title }</h1>
        <table>
          <thead>
          <tr>
            <th>Position</th>
            <th>Camper Name</th>
            <th>Points in past 30 days</th>
            <th>All the Points</th>
          </tr>
          </thead>
          <tbody>
          { this.props.data.map(function(user, index){
                return(
                  <tr key={ user.username }>
                  <td>#{index + 1}</td>
                  <td>
                  <a href={'https://www.freecodecamp.com/' + user.username} >
                  <img src={ user.img } className="profilePic" />
                  <span className="userName">{ user.username }</span>
                  </a>
                  </td>
                  <td>{ user.recent }</td>
                  <td>{ user.alltime }</td>
                  </tr>
                )
              })
          }
        </tbody>
        </table>
      </div>
    )
  }
}
