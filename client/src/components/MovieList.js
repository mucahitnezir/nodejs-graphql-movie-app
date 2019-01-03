import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getMoviesQuery } from '../queries'

class MovieList extends Component {
  listMovies() {
    const {data} = this.props;

    if (data.loading) {
      return <li>Loading..</li>
    } else {
      return data.movies.map(movie => <li key={movie.id}>{movie.title}</li>)
    }
  }

  render() {
    return (
      <div>
        <ul className="movie-list">
          {this.listMovies()}
        </ul>
      </div>
    );
  }
}

export default graphql(getMoviesQuery)(MovieList);
