import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const MovieTitle = styled.h2`
	color: black;
	font-size: 16px;
	line-height: 24px;
	font-family: avengeance_mightiest_avengeRg;
	padding: 10px;
`;

class MovieCard extends Component {
	render() {
		return (
			<Card
				style={{ marginBottom: "40px", flex: 1 }}
				bodyStyle={{ padding: 0 }}
			>
				<Link to="/movies/movieId">
					<div>
						<img
							src="https://via.placeholder.com/236x332"
							alt="poster for the movie title"
						/>
						<MovieTitle>Movie Title </MovieTitle>
					</div>
				</Link>
			</Card>
		);
	}
}

export default MovieCard;
