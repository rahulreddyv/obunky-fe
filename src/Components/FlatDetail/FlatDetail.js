import React, { Component } from 'react';
import { Carousel, Card, Row, Col } from 'antd';
import './FlatDetail.css';

const flatStatus = (data) => {
	if(data == 'A'){
		return "Available";
	}
}

export default class FlatList extends Component {
	render() {
		const flatData = this.props.flatData;
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
						<h5>{flatData.bhk} BHK</h5>
					</Col>	
					<Col span={12}>
						<h3>Monthly Rent</h3>
						<h5>{flatData.monthly_rent}</h5>
					</Col>
				</Row>
				<Row>
				<Row>
					<h3>Overview</h3>
					<Col span = {12}>
						<h3>Security Deposit</h3>
						<p>{flatData.securty_deposit}</p>
						<h3>Status</h3>
						<p>{flatStatus(flatData.status)}</p>
					</Col>
					<Col span = {12}>
						<h3>Available From</h3>
						<p>{flatData.available_from}</p>
						<h3>Sharing Type</h3>
						<p>{flatData.sharing_type}</p>
					</Col>
					</Row>
				</Row>
			</Card>
			</div>
		);
	}
}
