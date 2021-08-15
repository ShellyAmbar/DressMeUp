import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";
import "./Shirts.css";

function Shirts() {
  const [shirtsList, setShirtsList] = useState([]);
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
            (item) => item.type === "shirt"
          );
          if (shirtsList.length === 0) {
            setShirtsList(filteredList);
          }

          console.log("shirtsList", filteredList);
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
        {shirtsList.length > 0 && <SearchItemView list={shirtsList} />}
      </div>
    </div>
  );
}

export default Shirts;
