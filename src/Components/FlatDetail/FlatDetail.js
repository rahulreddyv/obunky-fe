import React, { Component } from 'react';
import { Carousel, Card, Row, Col, Button } from 'antd';
import './FlatDetail.css';

export default class FlatList extends Component {
  render() {
    return (
      <div style={{background: '#fff'}}>
		<Card title="Flat Details" bordered={false} style={{ width: '100%' }}>
			<Row>
				<Carousel autoplay>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
				</Carousel>
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
				<Row>
					<Button type="primary">View Details</Button>
				</Row>
			</Row>
		</Card>
    </div>
    );
  }
}
