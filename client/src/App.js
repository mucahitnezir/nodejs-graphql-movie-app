import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import MovieList from './components/MovieList'
import NewMovieForm from './components/NewMovieForm'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <MovieList/>
          <NewMovieForm/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
