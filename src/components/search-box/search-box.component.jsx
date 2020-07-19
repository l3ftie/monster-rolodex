import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeholder, handelChange }) => (
  <input
    className="search"
    onChange={handelChange}
    type="serach"
    placeholder={placeholder}
  />
);

export default SearchBox;
