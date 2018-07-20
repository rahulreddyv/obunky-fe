import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatNewForm from '../FlatNewForm/FlatNewForm';
import FlatPreview from '../FlatPreview/FlatPreview';

export default class AddProperty extends Component {
    state = {
      collapsed: false,
    };

    render(){
        return(
            <div>
                <Row>
                <Col className="gutter-row" span={12}>
                    <FlatNewForm />
                </Col>
                <Col className="gutter-row" span={12}>
                    <FlatPreview />
                </Col>
                </Row>
            </div>
        );
    }
}