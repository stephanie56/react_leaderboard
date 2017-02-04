import React from 'react';

import Header from 'components/Header.jsx';
import Board from 'components/Board.jsx';
import Footer from 'components/Footer.jsx';

export default class App extends React.Component {
  render() {

    return (
      <div id="app">
        <Header logo="freeCodeCamp" />
        <Board title="Leaderboard" content="HelloWorld"/>
        <Footer author="Stephanie Zeng" />
      </div>
    )
  }
}
