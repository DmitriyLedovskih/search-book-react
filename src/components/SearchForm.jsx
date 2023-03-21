import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortType } from "../Redux/slices/filterSlice";
import { getSearchValue, setSearchValue } from "../Redux/slices/searchSlice";

function SearchForm() {
  const value = useSelector((state) => state.search.value);
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const catagoryArray = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(setSearchValue(inputRef.current.value));
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
        <span className="search-form__text">Категории</span>
        <select
          name=""
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
        <span className="search-form__text">Сортировать по</span>
        <select
          name=""
          className="search-form__element"
          onChange={(evt) => dispatch(setSortType(evt.target.value))}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </label>
    </form>
  );
}

export default SearchForm;
