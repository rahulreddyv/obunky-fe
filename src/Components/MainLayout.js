import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import RouterContent from './router/router';
import {NavLink} from 'react-router-dom';
import './MainLayout.css';

const {Header, Content} = Layout;

export default class MainLayout extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout>
                    <Header style={{background: '#000', padding: 0}}>
                        <div style={{display: 'inline-block'}}>
                            {/*Unable to center the nav elements*/}
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{
                                    lineHeight: '64px',
                                    position: 'relative'
                                }}
                            >
                                <Menu.Item key="1"><NavLink to="/" activeClassName="is-active">Find a
                                    Flat</NavLink></Menu.Item>
                                <Menu.Item key="logo" disabled={true}>
                                    <div className='logo'
                                         style={{
                                             height: '32px',
                                             background: 'rgba(255,255,255,.2)',
                                             margin: '16px',
                                             width: '120px'
                                         }}
                                    />
                                </Menu.Item>
                                <Menu.Item key="2"><NavLink to="/newProperty" activeClassName="is-active" exact={true}>
                                    Rent a Flat</NavLink></Menu.Item>
                                <Menu.Item key="3"><NavLink to="/login" activeClassName="is-active" exact={true}>
                                    Login</NavLink></Menu.Item>
                                <Menu.Item key="4"><NavLink to="/logout" activeClassName="is-active" exact={true}>
                                    Logout</NavLink></Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, minHeight: 280}}>
                        <RouterContent/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
