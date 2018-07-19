import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import './FlatPreview.css';

export default class FlatList extends Component {
  render() {
    return(
    <div style={{ background: '#ECECEC', padding: '20px' }}>
      <Card title="Your property card preview" bordered={false}>
      <Row>
        <Col className="gutter-row" span={18}>
          <img src=".." placeholder="~/Desktop/shot.png"/>
        </Col>
        <Col className="gutter-row" span={6}>
          <Row>
              <Col>
                <img src=".." placeholder="~/Desktop/shot.png"/>
              </Col>
              <Col>
                <img src=".." placeholder="~/Desktop/shot.png"/>
              </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <h3>Apartment</h3>
          <h5>Furnishing Type</h5>
        </Col>
        <Col span={12}>
          Monthly Rent
        </Col>
      </Row>
      <Row>
        <h3>Overview</h3>
        <Col span = {12}>
          <h3>Security Deposit</h3>
          <p>Security Deposit</p>
          <h3>Built Up Area</h3>
          <p>Built Up Area</p>
        </Col>
        <Col span = {12}>
        <h3>Availabe From</h3>
        <p>2018-07-18</p>
        </Col>
      </Row>
      </Card>
    </div>);
  }
}
