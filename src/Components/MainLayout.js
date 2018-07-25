import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import SimpleContent from './Content/Content';
import { NavLink } from 'react-router-dom';
import './MainLayout.css';

const { Header, Content } = Layout;

export default class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Header style={{ background: '#000', padding: 0 }}>
          {/*Unable to center the nav elements*/}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
                lineHeight: '64px',
                position: 'relative',
                justifyContent: 'center'
              }}
            >
              <Menu.Item key="1"><NavLink to="/" activeClassName="is-active">Find a Flat</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/newProperty" activeClassName="is-active" exact={true}>New Property</NavLink></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
            <SimpleContent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
