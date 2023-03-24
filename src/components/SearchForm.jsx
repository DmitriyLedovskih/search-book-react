import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItems } from "../Redux/slices/cardSlice";
import { setCategory, setSortType } from "../Redux/slices/filterSlice";
import { setSearchValue } from "../Redux/slices/searchSlice";

function SearchForm() {
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const navigate = useNavigate();
  const catagoryArray = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];

  const sortArray = ["relevance", "newest"];

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(setSearchValue(inputRef.current.value));
    navigate("/");
  }
  return (
    <form className="search-form" onSubmit={submitForm}>
      <label className="search-form__label">
        <input
          type="text"
          placeholder="Поиск"
          className="search-form__element"
          ref={inputRef}
        />
        <button className="search-form__button button">
          <FiSearch className="search-form__button-icon" />
        </button>
      </label>
      <label className="search-form__label">
        <span className="search-form__text">Categories</span>
        <select
          name="categories-select"
          className="search-form__element"
          onChange={(evt) => dispatch(setCategory(evt.target.value))}
        >
          {catagoryArray.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="search-form__label">
        <span className="search-form__text">Sorting by</span>
        <select
          name="sort-select"
          className="search-form__element"
          onChange={(evt) => dispatch(setSortType(evt.target.value))}
        >
          {sortArray.map((sort, index) => (
            <option value={sort} key={index}>
              {sort}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default SearchForm;
