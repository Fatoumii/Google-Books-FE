import React from "react";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  return (
    <ul className="books">
      {books.map(book => {
        return (
          <li className="book" key={book.id}>
            {<h2>{book.volumeInfo.title}</h2>}
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail
              }
            />
            <p className="author">Authors: {book.volumeInfo.authors}</p>
          </li>
        );
      })}
    </ul>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Books;
