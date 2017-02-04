import React from 'react';
import axios from 'axios';

import Header from 'components/Header.jsx';
import Board from 'components/Board.jsx';
import Footer from 'components/Footer.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    var _this = this;
    this.serverRequest =
      axios
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(function(result){
          _this.setState({
            data: result
          });
        });
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }


  render() {
    return (
      <div id="app">
        <Header logo="freeCodeCamp" />
        <Board title="Leaderboard" data={this.state.data}/>
        <Footer author="Stephanie Zeng" />
      </div>
    )
  }
}
