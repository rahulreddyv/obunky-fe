import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `House ${i}`,
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    description: 'It\'s an awesome house',
    content: 'There is a room available for rent in this 3 bhk flat.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class FlatList extends Component {

  onItemClick(item, e) {
    console.log(item);
  }

  render() {
    const flats = this.props.flats;
    console.log(flats)
    return (
        <div style={{background: '#fff'}}>
        <InfiniteScroll>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    onClick={this.onItemClick.bind(this, item.title)}
                    key={item.title}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                    extra={<img width={272} alt="logo" src={item.avatar} />}
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                    </List.Item>
                )}
            />
        </InfiniteScroll>
      </div>
    );
  }
}
