import React, { Component } from 'react';
import { Form, Input, InputNumber, Radio, Button, DatePicker} from 'antd';
import './FlatNewForm.css';

const FormItem = Form.Item;

export default class FlatList extends Component {
  render() {
    const RadioGroup = Radio.Group;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="I want to"
        >
          <RadioGroup>
            <Radio value="a">Rent</Radio>
            <Radio value="b">Sell</Radio>
          </RadioGroup>
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Property Type"
      >
        <RadioGroup>
          <Radio value="a">Apartment</Radio>
          <Radio value="b">Independent House</Radio>
          <Radio value="c">Independent Floor</Radio>
        </RadioGroup>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Select BHK"
    >
      <RadioGroup buttonStyle="solid">
        <Radio value="a">1 RK</Radio>
        <Radio value="b">1 BHK</Radio>
        <Radio value="c">2 BHK</Radio>
        <Radio value="d">3 BHK</Radio>
        <Radio value="e">4 BHK</Radio>
        <Radio value="f">5 BHK</Radio>
        <Radio value="g">5+ BHK</Radio>
      </RadioGroup>
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Furnished"
    >
      <RadioGroup>
        <Radio value="a">Fully Furnished</Radio>
        <Radio value="b">Semi Furnished</Radio>
        <Radio value="c">Unfurnished</Radio>
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
      label="Brokerage"
    >
      <Input />
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
    );
  }
}
