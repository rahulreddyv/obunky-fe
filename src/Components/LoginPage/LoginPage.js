import React, {Component} from 'react';
import { Card, Row, Col } from 'antd';

import LoginForm from '../LoginForm/LoginForm';

export default class LoginPage extends Component {
    render() {
        return (
            <Row type="flex" justify="space-around" align="middle">
                <Col span={10}>
                    <Card hoverable title={"OBunky"}>
                        <LoginForm/>
                    </Card>
                </Col>
            </Row>
        )
    }
}
