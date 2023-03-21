import React from "react";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a href="#" className="logo header__logo">
            Поиск книг
          </a>
          <SearchForm />
        </div>
      </div>
    </header>
  );
}

export default Header;
