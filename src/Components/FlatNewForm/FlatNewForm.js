import React, { Component } from 'react';
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

class FlatNewForm extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  
  toggleSecurityDeposit(){
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSubmit = (e) => {
	e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
	const {getFieldDecorator} = this.props.form;
    const RadioGroup = Radio.Group;
    const TabPane = Tabs.TabPane;
    const RadioButton = Radio.Button

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
	};
	
	const config = {
		rules: [{ type: 'object', required: true, message: 'Please select time!' }],
	  };
    return (
    <div>
		<h2>New Property Listing</h2>
		<Tabs defaultActiveKey="1">
			<TabPane tab="Basic Info" key="1">
				<Form onSubmit= {this.handleSubmit}>
					<FormItem
						{...formItemLayout}
						label="Property Type"
					>
					{getFieldDecorator('property_type')(
						<RadioGroup>
							<RadioButton value="IA">Apartment</RadioButton>
							<RadioButton value="IH">Independent House</RadioButton>
							<RadioButton value="GS">Gated Society</RadioButton>
						</RadioGroup>
					)}
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="Select BHK"
					>
						{getFieldDecorator('bhk')(
							<RadioGroup buttonStyle="solid">
								<RadioButton value="0">1 RK</RadioButton>
								<RadioButton value="1">1 BHK</RadioButton>
								<RadioButton value="2">2 BHK</RadioButton>
								<RadioButton value="3">3 BHK</RadioButton>
								<RadioButton value="4">4 BHK</RadioButton>
								<RadioButton value="5">4+ BHK</RadioButton>
							</RadioGroup>
						)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					label="Furnished"
					>
					{getFieldDecorator('furnishing')(
					<RadioGroup>
						<RadioButton value="FF">Fully Furnished</RadioButton>
						<RadioButton value="SF">Semi Furnished</RadioButton>
						<RadioButton value="UN">Unfurnished</RadioButton>
					</RadioGroup>)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					label="Available From"
					>
						{getFieldDecorator('available_from', config)(
							<DatePicker />
						)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					label="Monthly Rent"
					>
						{getFieldDecorator('monthly_rent')(
							<Input />
						)}
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="Security Deposit"
						> 
						{getFieldDecorator('security_deposit')(
							<Input />
						)}
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="Sharing Type"
						>
						{getFieldDecorator('sharing_type')(
							<RadioGroup>
								<RadioButton value="1">Single Sharing</RadioButton>
								<RadioButton value="2">Double Sharing</RadioButton>
								<RadioButton value="3">Triple Sharing</RadioButton>
								<RadioButton value="n">3+ Sharings</RadioButton>
							</RadioGroup>
						)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					label="Preferences"
					>
					{getFieldDecorator('preferences')(
						<Select
						mode="multiple"
						style={{ width: '100%' }}
						placeholder="Please select"
						onChange={handleChange}
						>
							<Option value="S">No Smoking</Option>
							<Option value="A">No Alcohol</Option>
							<Option value="V">Vegetarian</Option>
						</Select>
					)}
					</FormItem><FormItem wrapperCol={{ span: 12, offset: 6 }}>
						<Button type="primary" htmlType="submit">Submit</Button>
			   		</FormItem>
				</Form>
			</TabPane>
		</Tabs>
	  </div>
    );
  }
}

const NewFlatForm = Form.create()(FlatNewForm);

export default NewFlatForm;