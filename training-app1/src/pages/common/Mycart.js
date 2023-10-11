import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, Col, Row } from 'antd';

function MyCart() {
  return (
    <div>
      <Row
        style={{
          height: 500,
          background: "LightGrey",
          justifyContent: "center"
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1
          }}
        >
          <Card style={{ background: "gray" }} title="My Cart">
            <p>My Cart Details in stored over here</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyCart;
