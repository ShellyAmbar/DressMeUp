import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";
import { observer } from "mobx-react";
import itemsStore from "../../../store/ItemsStore";

function Shoes() {
  return (
    <div className="page-container">
      <div className="page-content-container">
        {itemsStore.filterItemsByType("shoes").length > 0 && (
          <SearchItemView list={itemsStore.filterItemsByType("shoes")} />
        )}
      </div>
    </div>
  );
}

export default observer(Shoes);
