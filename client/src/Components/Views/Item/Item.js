import React, { useState } from "react";
import "./Item.css";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Button } from "react-bootstrap";

function Item(props) {
  const [isShowColors, setIsShowColors] = useState(true);
  const [isShowsizes, setIsShowSizes] = useState(false);
  const handlePickColor = () => {
    setIsShowSizes(true);
  };
  const handlePickSize = () => {};
  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <CardTitle>{props.item.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {props.item.brand}
        </CardSubtitle>
        <CardText>
          {isShowColors && (
            <div className="colors">
              <h2>Pick a color:</h2>
              <ul>
                {props.item.colors.map((color) => {
                  return (
                    <li>
                      <Button
                        onClick={handlePickColor}
                        style={{
                          backgroundColor: color,
                          color: color === "white" ? "black" : "white",
                        }}
                      >
                        {color}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {isShowsizes && (
            <div className="sizes">
              <h2>Pick a size:</h2>
              <ul>
                {props.item.sizes.map((size) => {
                  return (
                    <li>
                      <Button onClick={handlePickSize}>{size}</Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </CardText>
      </CardBody>
    </Card>
    // <div className="item-container">
    //   <div className="item-content">
    //     <h1>
    //       `${props.item.name}, ${props.item.brand}`
    //     </h1>
    //     {isShowColors && (
    //       <div>
    //         <h2>Pick a color:</h2>

    //       </div>
    //     )}
    //      {isShowsizes && (
    //       <div>
    //         <h2>Pick a size:</h2>

    //       </div>
    //     )}

    //   </div>
    // </div>
  );
}

export default Item;
