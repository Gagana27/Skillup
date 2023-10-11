import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';

const { Meta } = Card;

const MyLearn = () => (

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
      <Card style={{ background: "gray" }} title="Card title">
        <p>Card content, Card content, Card content</p>
      </Card>
    </Col>
  </Row>

);
export default MyLearn;
