import React, { Component } from 'react';
import { Card, Col, Row, List } from 'antd';


export default class FlatDetailListItem extends Component {
    render(){
        return(
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

            );
        }
}
