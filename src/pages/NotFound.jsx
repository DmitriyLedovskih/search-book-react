import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404 Not Found :(</h1>
      <Link to="/" className="button button_type_outline not-found__button">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
