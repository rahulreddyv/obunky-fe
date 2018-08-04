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
        axios.get('http://192.168.99.103:8000/flats/?format=json')
        .then(
            (res) => {
                this.setState({flats: res.data });
            },
        )
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <FlatList flats = {this.state.flats}/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <FlatDetail />
                    </Col>
                </Row>
            </div>
        );
    }
}