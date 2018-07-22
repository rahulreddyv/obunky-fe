import React, { Component } from 'react';
import {Col, Row, List } from 'antd';
import FlatDetailListItem from '../FlatDetailListItem/FlatDetailListItem'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `House ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'It\'s an awesome house',
    content: 'There is a room available for rent in this 3 bhk flat.',
  });
}

export default class MainList extends Component {
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '5px' }}>
                <Col>
                <List>
                    <Row>
                         <FlatDetailListItem />
                    </Row>
                </List>
                </Col>
            </div>
        );
        }
}