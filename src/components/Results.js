import React, { Component } from 'react'
import styled from "styled-components";
import IndividualResult from './IndividualResult'


const ResultsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    img{
        width: 150px;
        height: 200px;
    }
`



class Results extends Component {
    state = {
        results: [
            {
    "name":"The Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
  },
  {
    "name":"Radiant Office",
    "image":"http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
  }
        ]
    }


    render() {
        return (
            <div>
                <h1>Results Page</h1>
                <ResultsContainer>
                <IndividualResult
                individualResult={this.props.individualResult}
                />
                </ResultsContainer>
            </div>
        );
    }
}

export default Results