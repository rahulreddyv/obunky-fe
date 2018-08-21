import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import FlexView from 'react-flexview';
import './FlatList.css';

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

    getRoomSharing(val){
        if(val == "1"){
            return "1 Sharing";
        }
        else if(val == "2"){
            return "2 Sharing";
        }
        else if(val == "3"){
            return "3 Sharing";
        }
        else if(val>3){
            return val+" Sharing";
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
                    pageSize: 3,
                }}
                dataSource={flats}
                renderItem={item => (
                <List.Item
                    onClick={this.onItemClick.bind(this, item.id)}
                    key={item.id}
                >
                <List.Item.Meta
                />
                <FlexView className="flatListRow">
                    <FlexView>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{"height":"120px", "marginLeft":"20px", "marginTop": "auto", "marginBottom":"auto"}}></img>
                    </FlexView>
                    <FlexView column marginLeft="auto" marginRight="auto">
                        <h2 style = {{fontSize:'20px'}}>{this.getRoomSharing(item.sharing_type)}</h2>
                        <h1 style = {{fontSize:'20px'}}>{this.getFlatTitle(item.bhk)}</h1> 
                        <h2 style = {{fontSize:'20px'}}>Location</h2>
                    </FlexView>
                    <FlexView column marginLeft="auto" marginRight="10vh" style={{"line-height":"1.4em"}}>
                        <h2 style = {{fontSize:'20px'}}>Rs. {item.monthly_rent}</h2>
                        <h4>Per month</h4>
                        <h4>Available From:</h4>
                        <h2 style = {{fontSize:'20px'}}>{item.available_from}</h2>
                    </FlexView>
                    </FlexView>
                </List.Item>
                )}
            />
      </div>
    );
  }
}