import React from "react";
import { Button } from "react-bootstrap";
import Table from "../../Views/Table/Table";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();
  const handleBackHome = () => {
    history.push("./Home");
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div className="page-container">
      <div className="page-content-container">
        <h1>Success!</h1>
        <img
          src={`./images/${getRandomInt(4)}.jpg`}
          style={{ width: "200px", height: "200px" }}
        />
        <Button onClick={handleBackHome} variant="outline-success">
          Create another Outfit
        </Button>
        <Table />
      </div>
    </div>
  );
}

export default Success;
