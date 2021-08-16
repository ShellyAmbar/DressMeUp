import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";
import "./Shirts.css";
import { observer } from "mobx-react";
import itemsStore from "../../../store/ItemsStore";
function Shirts() {
  return (
    <div className="page-container">
      <div className="page-content-container">
        {itemsStore.filterItemsByType("shirt").length > 0 && (
          <SearchItemView list={itemsStore.filterItemsByType("shirt")} />
        )}
      </div>
    </div>
  );
}

export default observer(Shirts);
