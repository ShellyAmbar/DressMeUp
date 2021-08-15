import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  const [numberOfSets, setnumberOfSets] = useState(0);
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const handleSuccess = () => {
    history.push("./Success");
  };
  return (
    <div className="page-container">
      <div className="page-content-container">
        <h1>Welcome to - Dress Me Up!</h1>
        <div>
          <h2>Number of sets: {numberOfSets}</h2>
          <h2>Status: {status}</h2>

          {status === 3 && (
            <Button onClick={handleSuccess} variant="outline-success">
              Submit set
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
