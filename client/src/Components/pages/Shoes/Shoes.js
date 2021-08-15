import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";

function Shoes() {
  const [shoesList, setShoesList] = useState([]);
  const fetchData = () => {
    fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.results) {
          // console.log(data.results);
          const filteredList = data.results.filter(
            (item) => item.type === "shoes"
          );
          if (shoesList.length === 0) {
            setShoesList(filteredList);
          }

          console.log("shoesList", filteredList);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    return fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="page-content-container">
        {shoesList.length > 0 && <SearchItemView list={shoesList} />}
      </div>
    </div>
  );
}

export default Shoes;
