import React, { Component } from 'react'
import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  color: rgb(22, 117, 191);
`;

class Home extends Component {
    render() {
        return (
            <div>
                <HomePage>
                <h1>TVMaze React</h1>
                </HomePage>
            </div>
        );
    }
}

export default Home