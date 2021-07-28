import React from "react";
import "./styles.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoardInput(props) {
  const { searchRef, suffix, ...inputProps } = props;
  return (
    <div className="cpn-input">
      <input
        className="search"
        type="search"
        placehoder="Search"
        ref={searchRef}
        {...inputProps}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon">
        {suffix}
      </FontAwesomeIcon>
    </div>
  );
}
