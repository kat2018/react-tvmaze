import React, { Component } from 'react';
import Home from "./Home";
import Search from './Search';
import Results from "./Results";



class App extends Component {
  render() {
    return (
      <div>
        <h1>TV Maze</h1>
        <Home />
        <Search />
        <hr/>
        <Results />
      </div>
    );
  }
}

export default App;