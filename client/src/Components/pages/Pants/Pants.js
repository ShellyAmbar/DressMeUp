import React, { useState, useEffect } from "react";
import SearchItemView from "../../Views/SearchItemView/SearchItemView";
import { observer } from "mobx-react";
import ItemsStore from "../../../store/ItemsStore";

const Pants = () => {
  return (
    <div className="page-container">
      <div className="page-content-container">
        {ItemsStore.filterItemsByType("pants").length > 0 && (
          <SearchItemView list={ItemsStore.filterItemsByType("pants")} />
        )}
      </div>
    </div>
  );
};

export default observer(Pants);
