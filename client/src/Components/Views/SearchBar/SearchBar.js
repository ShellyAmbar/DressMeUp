import React, { useState } from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const [value, setValue] = useState("");
  const handleChangeValue = (e) => {
    setValue(e.target.value);
    props.handleUpdateInput(e.target.value);
  };
  return (
    <div className="search-bar-container">
      <input
        value={value}
        type="text"
        placeholder="Search item"
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default SearchBar;
