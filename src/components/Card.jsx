import React from "react";

function Card({ data }) {
  console.log(data.volumeInfo.categories);
  return (
    <article className="card">
      <img
        src={data.volumeInfo.imageLinks.thumbnail}
        alt={data.volumeInfo.title}
        className="card__image"
      />
      <div className="card__content">
        <a href="#" className="card__category">
          {data.volumeInfo.categories && data.volumeInfo.categories[0]}
        </a>
        <h2 className="card__title">{data.volumeInfo.title}</h2>
        <ul className="card__authors">
          {data.volumeInfo.authors &&
            data.volumeInfo.authors.map((author, index) => (
              <li className="card__author" key={index}>
                {author}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;
