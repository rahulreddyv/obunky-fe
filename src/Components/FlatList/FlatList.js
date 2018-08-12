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

    //Function to return the BHK based on the value received from the backend
    getFlatTitle(prop){
        if(prop == 0){
            return "1 RK";
        }
        else if(prop>0 && prop<=4){
            return prop+" BHK";
        }
        else if(prop>4){
            return "4+ BHK";
        }
        else{
            return "";
        }
    }

    //Function to return furnishing based on the value received from the backend
    getFlatFurnishing(val){
        if(val == "FF"){
            return "Fully Furnished";
        }
        else if(val == "SF"){
            return "Semi Furnished";
        }
        else if(val == "UN"){
            return "Unfurnished";
        }
        else{
            return "";
        }
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
                    pageSize: 4,
                }}
                dataSource={flats}
                renderItem={item => (
                <List.Item
                    onClick={this.onItemClick.bind(this, item.id)}
                    key={item.id}
                    actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                >
                <List.Item.Meta
                    title={<h1 style = {{fontSize:'25px'}}>{this.getFlatTitle(item.bhk)}</h1>}
                    description={<h2>Rs. {item.monthly_rent}</h2>}
                />
                    {item.content}
                </List.Item>
                )}
            />
      </div>
    );
  }
}