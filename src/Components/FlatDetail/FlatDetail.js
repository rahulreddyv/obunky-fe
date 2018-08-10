import React, { Component } from 'react';
import { Carousel, Card, Row, Col, Button } from 'antd';
import axios from 'axios';
import './FlatDetail.css';

export default class FlatList extends Component {
	constructor(props){
		super(props);
		this.state={
			selected: null,
			flat: null
		};
		this.updateState = this.updateState.bind(this);
	}

	componentDidMount(){
		this.setState({
			selected: this.props.selected,
		})
	}

	componentDidUpdate(prevProps){
		if(JSON.stringify(this.props.selected) !== JSON.stringify(prevProps.selected)){
			this.setState({
				selected: this.props.selected
			});
			this.updateState(this.props.selected);
		}
	}

	updateState(id){
		let url = 'http://192.168.99.100:8000/flats/'+id;
		console.log("Actual item that was clicked is "+id);
		axios.get(url)
        .then(
            (res) => {
				this.setState({flat: res.data });
				console.log(this.state)
            },
        )
	}

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
					<h5>Furnished</h5>
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
