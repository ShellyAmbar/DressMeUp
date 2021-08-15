import React from "react";
import Item from "../Item/Item";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import "./ListView.css";

function ListView(props) {
  return (
    <div className="list-container">
      {/* {console.log("list", props.list)} */}
      {props.list && (
        <Container>
          <Row xs={3}>
            {props.list
              .sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
              })
              .map((e, i) => {
                return (
                  <Col>
                    <Item
                      handlePickedItem={props.handlePickedItem}
                      key={i}
                      id={i}
                      item={e}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default ListView;
