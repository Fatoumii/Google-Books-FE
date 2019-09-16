import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading.jsx";
import Search from "./components/Search";
import Chart from "./components/Chart";
import Books from "./components/Books";
// import axios from "axios";
import json from "./jsonBooks";

class App extends Component {
  state = {
    books: [],
    search: "javascript"
  };
  render() {
    const { books, search } = this.state;
    console.log(search);
    return (
      <div className="App">
        <Heading topic={search} />
        <Search updateSearch={this.updateSearch} />
        <Chart books={books} />
        <Books books={books} />
      </div>
    );
  }

  componentDidMount = async () => {
    const books = await this.fetchBooks();
    this.setState({ books });
  };

  fetchBooks = async () => {
    // const { search } = this.state;
    // const { data } = await axios.get(
    //   `https://www.googleapis.com/books/v1/volumes?q=${search}`
    // );
    // return data.items;
    return json;
  };
  updateSearch = updateSearchString => {
    //set state with new search
    this.setState({ search: updateSearchString });
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.search !== prevState.search) {
      const books = await this.fetchBooks();
      this.setState({ books });
    }
  };
}

export default App;
