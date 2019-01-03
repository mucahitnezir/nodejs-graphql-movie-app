import React, { Component } from 'react';
import './App.css'

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
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6">
                <MovieList/>
              </div>
              <div className="col-md-6">
                <NewMovieForm/>
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
