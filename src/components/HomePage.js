import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = styled.div`
	height: 100vh;
	background: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

const HomeTitle = styled.h1`
	font-family: averageance_mightiest_avengeRg;
	font-size: 72px;
	line-height: 90px;
	color: White;
`;

const Description = styled.div`
	font-family: TTFirsMedium;
	font-size: 45px;
	line-height: 50px;
	padding: 30px;
	max-width: 750px;
	text-align: center;
	margin-bottom: 40px;
`;

const ExploreButton = styled.span`
	background: #ad0000;
	color: white;
	border-radius: 25px;
	text-align: center;
	font-size: 25px;
	line-height: 40px;
	padding: 10px 20px;
	font-family: TTFirsMedium;
	&:hover {
		background: #0087be;
	}
`;

class HomePage extends Component {
	render() {
		return (
			<Home>
				<section>
					<HomeTitle>WordFlix</HomeTitle>
					<Description>
						Your favourite super-powered Single Page App for
						browsing Super Hero Movies!
					</Description>
					<Link to="/movies">
						<ExploreButton>Explore Films</ExploreButton>
					</Link>
				</section>
			</Home>
		);
	}
}

export default HomePage;
