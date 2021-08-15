import React, { useState } from "react";
import "./Item.css";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Button, Dropdown } from "react-bootstrap";

function Item(props) {
  const [isShowColors, setIsShowColors] = useState(true);
  const [isShowsizes, setIsShowSizes] = useState(false);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [item, setItem] = useState(null);

  const handlePickColor = (color) => {
    setColor(color);

    setIsShowSizes(true);
  };
  const handlePickSize = (size) => {
    setSize(size);
    setItem(item);
    props.handlePickedItem(color, size, props.item);
  };
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
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pick a color:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <ul>
                    {props.item.colors.map((color) => {
                      return (
                        <li>
                          <Dropdown.Item>
                            <Button
                              onClick={() => handlePickColor(color)}
                              style={{
                                backgroundColor: color,
                                color: color === "white" ? "black" : "white",
                              }}
                            >
                              {color}
                            </Button>
                          </Dropdown.Item>
                        </li>
                      );
                    })}
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          {isShowsizes && (
            <div className="sizes">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pick a size:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <ul>
                    {props.item.sizes.map((size, index) => {
                      return (
                        <li key={index}>
                          <Dropdown.Item>
                            <Button onClick={() => handlePickSize(size)}>
                              {size}
                            </Button>
                          </Dropdown.Item>
                        </li>
                      );
                    })}
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Item;
