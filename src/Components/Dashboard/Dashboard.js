import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FlatDetail from '../FlatDetail/FlatDetail';
import FlatList from '../FlatList/FlatList';

export default class Dashboard extends Component {
    state = {
        collapsed: false,
        jsonReturnedValue: null
    };

    // componentDidMount(){
    //     fetch('https://reqres.in/api/users?page=2')
    //     .then(function(response) {
    //     this.setState({
    //     jsonReturnedValue: response.json()
    //   }) 
    //   console.log(this.state.jsonReturnedValue);
    // })
    // }

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