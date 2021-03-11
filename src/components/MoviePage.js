import React from "react";
import styled from "styled-components";
import { GET_MOVIE } from "../graphql/getMovies";
import { useQuery } from "@apollo/react-hooks";
import renderHTML from "react-render-html";
import Loader from "../Loader";

const MovieDetails = styled.div`
	background: rgba(255, 255, 255, 0.8);
	max-width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 25px 50px;
	margin: auto;
	color: #222;
	> div {
		flex: 1;
	}
`;

const Poster = styled.div`
	max-width: 35%;
	min-width: 200px;
	background: white;
	padding: 10px;
	> img {
		max-width: 100%;
	}
`;

const MovieContent = styled.div`
	padding: 50px;
	font-size: 18px;
	line-height: 24px;
	> h2 {
		margin-bottom: 15px;
	}
`;

function MoviePage() {
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id: localStorage.getItem("id") },
	});
	const featuredImageFallback = "https://via.placeholder.com/341x512";
	if (!loading) {
		return (
			<MovieDetails>
				<Poster>
					<img
						alt={"poster for Movie Title"}
						src={
							data.post.featuredImage
								? data.post.featuredImage.node.sourceUrl
								: featuredImageFallback
						}
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							display: "block",
						}}
					/>
				</Poster>
				<MovieContent>
					<h2>{data.post.title}</h2>
					<h3>Released: {data.post.release_date} </h3>
					<br />
					<div>{renderHTML(data.post.content)}</div>
				</MovieContent>
			</MovieDetails>
		);
	} else {
		return <Loader />;
	}
}

export default MoviePage;
