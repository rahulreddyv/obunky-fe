import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatDetail from '../FlatDetail/FlatDetail';
import FlatList from '../FlatList/FlatList';
import axios from 'axios';

export default class Dashboard extends Component {
    state = {
        collapsed: false,
        jsonReturnedValue: null
    };

    componentDidMount(){
        this.getUserList();
    }

    getUserList(){
        fetch('http://192.168.99.102:8000/flats/?format=json')
        .then(res => res.json())
        .then(
            (res) => {
                console.log(res);
            },
        )
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <FlatList />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <FlatDetail />
                    </Col>
                </Row>
            </div>
        );
    }
}