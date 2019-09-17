import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <div>
        <p className="searchTopic">Search a topic below:</p>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a topic..."
            value={this.state.search}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ search: value });
  };
  handleSubmit = event => {
    const { search } = this.state;
    const { updateSearch } = this.props;
    event.preventDefault();
    updateSearch(search);
    this.setState({ search: "" });
  };
}

export default Search;
