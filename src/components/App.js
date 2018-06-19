import React, { Component } from 'react'
import Home from "./Home";
import Search from "./Search";
import Results from "./Results";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Search />
        <hr />
        <Results 
        />
      </div>
    );
  }
}

export default App

//Interactive stuff list: 

//Search
  //URL for movies
  //Click events for Search

//List of movie results
  //for each individualResult
  //URL for movie
  //Movie name
  //click event for search again 
    //on click, it will change the view