import React, { Component } from 'react';
import {  } from 'antd';
import { Form, Input, Radio, Button, DatePicker, Tabs, Select} from 'antd';
import './FlatNewForm.css';


const FormItem = Form.Item;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

export default class FlatList extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleSecurityDeposit(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    const RadioGroup = Radio.Group;
    const TabPane = Tabs.TabPane;
    const RadioButton = Radio.Button

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
      <h2>New Property Listing</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Info" key="1">
          <Form>
          <FormItem
            {...formItemLayout}
            label="Property Type"
          >
            <RadioGroup>
              <RadioButton value="a">Apartment</RadioButton>
              <RadioButton value="b">Independent House</RadioButton>
              <RadioButton value="c">Independent Floor</RadioButton>
            </RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Select BHK"
        >
          <RadioGroup buttonStyle="solid">
            <RadioButton value="a">1 RK</RadioButton>
            <RadioButton value="b">1 BHK</RadioButton>
            <RadioButton value="c">2 BHK</RadioButton>
            <RadioButton value="d">3 BHK</RadioButton>
            <RadioButton value="e">4 BHK</RadioButton>
            <RadioButton value="f">4+ BHK</RadioButton>
          </RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Furnished"
        >
          <RadioGroup>
            <RadioButton value="a">Fully Furnished</RadioButton>
            <RadioButton value="b">Semi Furnished</RadioButton>
            <RadioButton value="c">Unfurnished</RadioButton>
          </RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Available From"
        >
          <DatePicker />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Monthly Rent"
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Other Expenses"
        >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="None"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>,
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Security Deposit"
        > 
            <RadioGroup defaultValue="b" onChange={this.toggleSecurityDeposit.bind(this)}>
              <RadioButton value="a">Yes</RadioButton>
              <RadioButton value="b">No</RadioButton>
            </RadioGroup>
          {!this.state.isHidden && <Input />}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Sharing Type"
        >
        <RadioGroup>
          <RadioButton value="a">Single Sharing</RadioButton>
          <RadioButton value="b">Double Sharing</RadioButton>
          <RadioButton value="c">Triple Sharing</RadioButton>
          <RadioButton value="d">Four Sharing</RadioButton>
        </RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Preferences"
        >
        <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={handleChange}
        >
          <Option value="Non Smoker">Non Smoker</Option>
          <Option value="Non Alcoholic">Non Alcoholic</Option>
          <Option value="Vegetarian">Vegetarian</Option>
          <Option value="Non Vegetarian">Non Vegetarian</Option>
        </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Aminities"
        >
        <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={handleChange}
        >
          <Option value="AC">AC</Option>
          <Option value="Cooler">Cooler</Option>
          <Option value="Washing Machine">Washing Machine</Option>
          <Option value="Cot">Cot</Option>
          <Option value="Kitchen Setup">Kitchen Setup</Option>
          <Option value="Cook">Cook</Option>
        </Select>
        </FormItem>
        <FormItem
          {...formItemLayout}
        >
          <Button>Continue</Button>
        </FormItem>
      </Form>
    </TabPane>
  </Tabs>
  </div>
    );
  }
}
