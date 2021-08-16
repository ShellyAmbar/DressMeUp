import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import OutfitsStore from "../../../store/OutfitsStore";
import { observer } from "mobx-react";

const Home = () => {
  const [numberOfSets, setnumberOfSets] = useState(0);
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const handleSubmitSet = () => {
    OutfitsStore.addToOutfits();
    history.push("./Success");
  };
  return (
    <div className="page-container">
      <div className="page-content-container">
        <h1>Welcome to - Dress Me Up!</h1>
        <div>
          <h2>Number of sets: {OutfitsStore.allOutfits.length}</h2>
          <h2>Status: {OutfitsStore.curentStatus}</h2>

          {OutfitsStore.curentStatus === 3 && (
            <Button onClick={handleSubmitSet} variant="outline-success">
              Submit set
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
