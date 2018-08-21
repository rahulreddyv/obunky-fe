import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatNewForm from '../FlatNewForm/FlatNewForm';
import FlatDetail from '../FlatDetail/FlatDetail';

export default class AddProperty extends Component {
    state = {
      collapsed: false,
    };

    render(){
        const flatDetailComp = this.state.flatData ? <FlatDetail flatData = {this.state.flatData} /> : ""
        return(
            <div>
                <Row>
                    <Col className="gutter-row" span={12}>
                        <FlatNewForm />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        {flatDetailComp}
                    </Col>
                </Row>
            </div>
        );
    }
}
