import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Form, Input, Radio, Button, DatePicker} from 'antd';
import './FlatNewForm.css';


const FormItem = Form.Item;

export default class FlatList extends Component {
  render() {
    const RadioGroup = Radio.Group;
    const TabPane = Tabs.TabPane;
    const RadioButton = Radio.Button

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          <Form>
            <FormItem
              {...formItemLayout}
              label="I want to"
            >
              <RadioGroup>
                <RadioButton value="a">Rent</RadioButton>
                <RadioButton value="b">Sell</RadioButton>
              </RadioGroup>
          </FormItem>

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
            <RadioButton value="f">5 BHK</RadioButton>
            <RadioButton value="g">5+ BHK</RadioButton>
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
          label="Security Deposit"
        >
          <Input />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Sharing Type"
        >
			<RadioGroup>
				<RadioButton value="a">Single Sharing</RadioButton>
				<RadioButton value="b">Double Sharing</RadioButton>
				<RadioButton value="c">Triple Sharing</RadioButton>
				<RadioButton value="c">Four Sharing</RadioButton>
			</RadioGroup>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Built Up Area"
        >
          <Input />
        </FormItem>
        <FormItem
          {...formItemLayout}
        >
          <Button>Continue</Button>
        </FormItem>
      </Form>
    </TabPane>
  </Tabs>
    );
  }
}
