import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
import { GET_MOVIES } from "../graphql/getMovies";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../Loader";

const PageTitle = styled.h1`
	font-family: avengeance_mightiest_avengeRg;
	font-size: 48px;
	line-height: 50px;
	text-align: center;
	padding: 20px;
	margin-top: 40px;
	color: white;
`;

const MoviesWrapper = styled.div`
	max-width: 80%;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	margin-bottom: 50px;
`;

const MovieTitle = styled.h2`
	color: white;
	font-size: 16px;
	line-height: 24px;
	font-family: avengeance_mightiest_avengeRg;
	padding: 10px;
`;

const LoadMore = styled.div`
	background: #ad0000;
	color: white;
	border-radius: 25px;
	text-align: center;
	font-size: 25px;
	line-height: 40px;
	padding: 10px 20px;
	font-family: TTFirsMEdium;
	margin: 0 auto 50px;
	&:hover {
		background: #0087be;
	}
	display: inline-block;
	cursor: pointer;
`;

function MovieCard({ movie }) {
	const setId = () => {
		localStorage.setItem("id", movie.id);
	};

	const featuredImageFallback = "https://via.placeholder.com/236x332";
	return (
		<Card
			style={{
				marginBottom: "40px",
				flex: 1,
				border: "none",
				background: "black",
			}}
			bodyStyle={{ padding: 0 }}
		>
			<Link to={`/movies/${movie.postId}`} id={movie.id} onClick={setId}>
				<div>
					<img
						className="thumbnail"
						src={
							movie.featuredImage
								? movie.featuredImage.node.sourceUrl
								: featuredImageFallback
						}
						alt="poster for the movie title"
					/>
					<MovieTitle>{movie.title} </MovieTitle>
				</div>
			</Link>
		</Card>
	);
}

function MoviesPage() {
	const { loading, data, fetchMore } = useQuery(GET_MOVIES, {
		variables: { first: 4, cursor: "" },
	});

	if (!loading) {
		console.log(data);
		return (
			<div>
				<PageTitle>Movies</PageTitle>
				<MoviesWrapper>
					<Row
						gutter={40}
						type="flex"
						justify="space-between"
						aling="center"
					>
						{data.posts.edges.map((movie) => (
							<React.Fragment key={movie.node.postId}>
								<Col xs={24} sm={12} md={8} lg={6}>
									<MovieCard movie={movie.node} />}
								</Col>
							</React.Fragment>
						))}
					</Row>
					{data.posts.pageInfo.hasNextPage && (
						<Row>
							<LoadMore
								onClick={() => {
									fetchMore({
										query: GET_MOVIES,
										variables: {
											first: 4,
											cursor:
												data.posts.pageInfo.endCursor,
										},
										updateQuery: (
											prev,
											{ fetchMoreResult }
										) => {
											const newEdges =
												fetchMoreResult.posts.edges;
											const pageInfo =
												fetchMoreResult.posts.pageInfo;
											const __typename =
												prev.posts.__typename;
											return {
												posts: {
													__typename,
													edges: [
														...prev.posts.edges,
														...newEdges,
													],
													pageInfo,
												},
											};
										},
									});
								}}
							>
								Load More
							</LoadMore>
						</Row>
					)}
				</MoviesWrapper>
			</div>
		);
	} else {
		return <Loader />;
	}
}

export default MoviesPage;
