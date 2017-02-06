import React from 'react';
import axios from 'axios';

import Header from 'components/Header.jsx';
import Board from 'components/Board.jsx';
import Tab from 'components/Tab.jsx';
import Footer from 'components/Footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    }

    // Bind methods to component instance.
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount(){
    this.handleData('alltime');
  }

  componentWillUnmount(){
    this.serverRequest.abort();
  }


  handleData(key) {
    axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/' + key)
      .then((res) => {
        this.setState({
          data: res.data
        });
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  render() {
    return (
      <div id="app">
        <Header logo="freeCodeCamp" />
        <Tab handleData={this.handleData.bind(this)}/>
        <Board title="Leaderboard" data={this.state.data} />
        <Footer author="Stephanie Zeng" />
      </div>
    )
  }
}
