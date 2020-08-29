import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button, Card } from "antd";
import PageHeader from "../../components/pageHeader";
import axios from "axios";

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			age: "",
			website: "",
			introduction: "",
			postResult: "",
		};
	}
	onChangeHandler = (event) => {
		var myname = event.target.value;
		this.setState({ name: myname });
		var myemail = event.target.value;
		this.setState({ email: myemail });
		var myage = event.target.value;
		this.setState({ age: myage });
		var mywebsite = event.target.value;
		this.setState({ website: mywebsite });
		var myintroduction = event.target.value;
		this.setState({ introduction: myintroduction });
	};
	onFinish = () => {
		//console.log(values);
		//event.preventDefault();

		// const user = {
		// 	name: this.state.name,
		// 	email: this.state.email,
		// 	age: this.state.age,
		// 	website: this.state.website,
		// 	introduction: this.state.introduction,
		// };

		axios
			.post(
				"https://laagbe.com/car-info/api/post/create.php",
				this.state.name,
				this.state.email,
				this.state.age,
				this.state.website,
				this.state.introduction
			)
			.then((response) => {
				this.setState({ postResult: response.data });
				alert(this.state.postResult);
			})
			.catch((error) => {
				alert("Something went wrong");
			});
	};

	render() {
		return (
			<div>
				<PageHeader />
				<Card style={{ marginRight: 300 }}>
					<Form
						{...layout}
						name="nest-messages"
						onFinish={this.onFinish}
						//validateMessages={validateMessages}
					>
						<Form.Item
							name={["user", "name"]}
							label="Name"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input onChange={this.onChangeHandler} />
						</Form.Item>
						<Form.Item
							name={["user", "email"]}
							label="Email"
							rules={[
								{
									type: "email",
								},
							]}
						>
							<Input onChange={this.onChangeHandler} />
						</Form.Item>
						<Form.Item
							name={["user", "age"]}
							label="Age"
							rules={[
								{
									type: "number",
									min: 0,
									max: 99,
								},
							]}
						>
							<InputNumber onChange={this.onChangeHandler} />
						</Form.Item>
						<Form.Item name={["user", "website"]} label="Website">
							<Input onChange={this.onChangeHandler} />
						</Form.Item>
						<Form.Item
							name={["user", "introduction"]}
							label="Introduction"
						>
							<Input.TextArea onChange={this.onChangeHandler} />
						</Form.Item>
						<Form.Item
							wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
						>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		);
	}
}

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not validate email!",
		number: "${label} is not a validate number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};

export default Signup;
