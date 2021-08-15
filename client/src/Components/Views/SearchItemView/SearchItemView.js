import React, { useState } from "react";
import ListView from "../ListView/ListView";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchItemView.css";

function SearchItemView(props) {
  const [originList, setOriginList] = useState(props.list ? props.list : []);
  let [filteredList, setfilteredList] = useState(props.list ? props.list : []);
  const handleUpdateInput = (searchValue) => {
    if (searchValue === "") {
      setfilteredList(originList);
    }
    const newList = originList.filter(
      (item) =>
        item.name.includes(searchValue) || item.brand.includes(searchValue)
    );
    setfilteredList(newList);
    console.log("originList", originList);
    console.log("filteredList", filteredList);
  };
  return (
    <div className="search-item-container">
      <SearchBar handleUpdateInput={handleUpdateInput} />
      <ListView list={filteredList} />
    </div>
  );
}

export default SearchItemView;
