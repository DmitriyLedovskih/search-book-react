import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCardItem } from "../Redux/slices/cardSlice";

function Card({ data }) {
  const dispatch = useDispatch();
  return (
    <article className="card" onClick={() => dispatch(setCardItem(data))}>
      <Link to={`/book/${data.id}`} className="card__link">
        <img
          src={
            data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail
          }
          alt={data.volumeInfo.title}
          className="card__image"
        />
        <div className="card__content">
          <span className="card__category">
            {data.volumeInfo.categories && data.volumeInfo.categories}
          </span>
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
      </Link>
    </article>
  );
}

export default Card;
