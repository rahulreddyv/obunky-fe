import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
listData.push({
    href: 'http://ant.design',
    title: `House`,
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    description: 'It\'s an awesome house',
    content: 'There is a room available for rent in this 3 bhk flat.',
});

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class FlatList extends Component {

    onItemClick(id){
        this.props.itemClick(id)
    }

  render() {
    const flats = this.props.flats;
    console.log(flats)
    return (
        <div style={{background: '#fff'}}>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: 3,
                }}
                dataSource={flats}
                renderItem={item => (
                <List.Item
                    onClick={this.onItemClick.bind(this, item.id)}
                    key={item.id}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                >
                <List.Item.Meta
                    avatar={<Avatar src={item.photo_urls} />}
                    title={<a href={item.href}>{item.property_type}</a>}
                    description={item.furnishing}
                />
                    {item.content}
                </List.Item>
                )}
            />
      </div>
    );
  }
}