import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search for a topic..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <br />
        <button className="button" type="submit">
          Search
        </button>
      </form>
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
