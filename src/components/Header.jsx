import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <Link to="/" className="logo header__logo">
            Search for books
          </Link>
          <SearchForm />
        </div>
      </div>
    </header>
  );
}

export default Header;
