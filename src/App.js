import React, { Component } from "react";
import HomePage from "./components/HomePage";
import PageLayout from "./components/PageLayout";
import MoviePage from "./components/MoviePage";
import MoviesPage from "./components/MoviesPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "antd/dist/antd.css";
import "./styles/style.css";

class App extends Component {
  client = new ApolloClient({
    uri: " http://wordflix.local/graphql",
  });
  render() {
    return (
      <ApolloProvider client={this.client}>
        <Router>
          <Route exact path="/movies">
            <PageLayout>
              <MoviesPage />
            </PageLayout>
          </Route>
          <Route path="/movies/:movieId">
            <PageLayout>
              <MoviePage />
            </PageLayout>
          </Route>
          <Route exact path="/" component={HomePage} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
