import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const MenuBar = styled.section`
	background: #ad0000;
	padding: 10px;
	height: auto;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 100;
	> a {
		font-size: 18px;
		line-height: 40px;
		color: white;
		margin: 0 10px;
		&:hover {
			color: black;
		}
	}
`;

const Wrapper = styled.div`
	background: #000;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 60px;
`;

class PageLayout extends Component {
	render() {
		return (
			<Wrapper>
				<MenuBar>
					<Link to="/">Home</Link>
					<Link to="/movies">Browse Movies</Link>
				</MenuBar>
				<Content>{this.props.children}</Content>
			</Wrapper>
		);
	}
}

export default PageLayout;
