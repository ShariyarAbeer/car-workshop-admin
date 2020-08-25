import React, { Component } from "react";
import PageHeader from "../components/pageHeader.js";
import { Layout } from "antd";
import {
	Route,
	Link,
	BrowserRouter as Router,
} from "../../node_modules/react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<PageHeader />
				<h1>Home Page</h1>
				<Layout>
					<Header>Header</Header>
					<Layout>
						<Sider width={200} style={{ color: "red" }}>
							<Router>
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/carlist">Car List</Link>
									</li>
								</ul>
							</Router>
						</Sider>
						<Content>Content</Content>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
		);
	}
}

export default Home;
