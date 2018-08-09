import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatDetail from '../FlatDetail/FlatDetail';
import FlatList from '../FlatList/FlatList';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            collapsed: false,
            jsonReturnedValue: null,
            selected: null
        }
    }

    componentDidMount(){
        this.getUserList();
    }

    getUserList(){
        axios.get('http://192.168.99.103:8000/flats/?format=json')
        .then(
            (res) => {
                this.setState({flats: res.data });
            },
        )
    }

    onItemClick(id){
        this.setState({
            selected: id
        });
        console.log("Item actually clicked "+ id)
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <FlatList flats = {this.state.flats} itemClick={this.onItemClick}/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <FlatDetail selected={this.state.selected}/>
                    </Col>
                </Row>
            </div>
        );
    }
}