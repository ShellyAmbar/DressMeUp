import React, { useState } from "react";
import ListView from "../ListView/ListView";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchItemView.css";
import { Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import ItemsStore from "../../../store/ItemsStore";
import OutfitsStore from "../../../store/OutfitsStore";
import { useHistory } from "react-router-dom";

function SearchItemView(props) {
  const [originList, setOriginList] = useState(props.list ? props.list : []);
  let [filteredList, setfilteredList] = useState(props.list ? props.list : []);
  const history = useHistory();

  const handleUpdateInput = (searchValue) => {
    const newList = ItemsStore.filterItemsByKey(props.list, searchValue);
    setfilteredList(newList);
  };
  const handlePickedItem = (color, size, item) => {
    OutfitsStore.lastPickedItem = { item, size, color };
    setShow(true);
  };
  const handleAddItem = () => {
    OutfitsStore.setItem(OutfitsStore.lastPickedItem);
    handleClose();
    history.push("./Home");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="search-item-container">
      <SearchBar handleUpdateInput={handleUpdateInput} />
      <span>{"Total items: " + filteredList.length}</span>
      <ListView handlePickedItem={handlePickedItem} list={filteredList} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Greate Choice!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to add this item to your list?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default observer(SearchItemView);
