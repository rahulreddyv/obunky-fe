import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainList from '../MainList/MainList';
import FlatDetail from '../FlatDetail/FlatDetail';
import FlatList from '../FlatList/FlatList';

export default class Dashboard extends Component {
    state = {
        collapsed: false,
    };

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