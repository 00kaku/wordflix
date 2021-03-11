import gql from "graphql-tag";
export const GET_MOVIES = gql`
	query GetPosts($first: Int!, $cursor: String!) {
		posts(first: $first, after: $cursor) {
			edges {
				node {
					title
					id
					postId
					content
					featuredImage {
						node {
							sourceUrl
						}
					}
				}
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`;

export const GET_MOVIE = gql`
	query getPost($id: ID!) {
		post(id: $id) {
			id
			title
			content
			featuredImage {
				node {
					sourceUrl
				}
			}
			release_date
		}
	}
`;
