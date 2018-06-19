import React, { Component } from 'react'
import { queryTVMazeAPI } from './Util'

class SearchContainer extends Component {
    render() {
        return (
            <div>
                <h1>Search Container </h1>
            </div>
        );
    }
}

export default SearchContainer

// handleSearchInput for managing changes to the input field
// onSubmitQuery for kicking of the ajax request
// onSearchAgain to set state back to render the search bar