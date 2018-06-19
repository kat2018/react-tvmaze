import React, { Component } from 'react'

class Search extends Component {
    render() {
        return <div>
            <form>
              <label>
                <input type="text" name="name" value="Enter a Movie Title" />
              </label>
                <input type="submit" value="Search" />
            </form>
          </div>;
    }
}

export default Search