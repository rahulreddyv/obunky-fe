import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatList from '../FlatList/FlatList';
import FlatDetail from '../FlatDetail/FlatDetail';

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