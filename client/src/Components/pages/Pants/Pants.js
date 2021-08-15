import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";

function Pants() {
  const [pantsList, setPantsList] = useState([]);
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
            (item) => item.type === "pants"
          );
          if (pantsList.length === 0) {
            setPantsList(filteredList);
          }

          console.log("pantsList", filteredList);
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
        {pantsList.length > 0 && <SearchItemView list={pantsList} />}
      </div>
    </div>
  );
}

export default Pants;
