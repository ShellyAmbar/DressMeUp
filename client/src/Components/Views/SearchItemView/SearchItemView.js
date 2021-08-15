import React, { useState } from "react";
import ListView from "../ListView/ListView";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchItemView.css";
import { Modal, Button } from "react-bootstrap";

function SearchItemView(props) {
  const [originList, setOriginList] = useState(props.list ? props.list : []);
  let [filteredList, setfilteredList] = useState(props.list ? props.list : []);
  const handleUpdateInput = (searchValue) => {
    if (searchValue === "") {
      // setfilteredList(originList);
    }
    const newList = originList.filter(
      (item) =>
        item.name.includes(searchValue) || item.brand.includes(searchValue)
    );
    setfilteredList(newList);
    console.log("originList", originList);
    console.log("filteredList", filteredList);
  };
  const handlePickedItem = (color, size, item) => {
    setShow(true);
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
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SearchItemView;
