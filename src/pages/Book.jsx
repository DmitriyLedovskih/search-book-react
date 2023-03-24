import React from "react";

function Book() {
  const item = JSON.parse(localStorage.getItem("item"));
  return (
    <div className="book-page">
      <div className="book-page__preview">
        <img
          src={
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
          }
          alt={item.volumeInfo.title}
          className="book-page__image"
        />
      </div>
      <div className="book-page__content">
        <span className="book-page__category">
          {item.volumeInfo.categories && item.volumeInfo.categories}
        </span>
        <h1 className="book-page__title">{item.volumeInfo.title}</h1>
        <ul className="book-page__authors">
          {item.volumeInfo.authors &&
            item.volumeInfo.authors.map((author, index) => (
              <li className="book-page__author" key={index}>
                {author}
              </li>
            ))}
        </ul>
        <p className="book-page__descr">
          {item.volumeInfo.description && item.volumeInfo.description}
        </p>
      </div>
    </div>
  );
}

export default Book;
