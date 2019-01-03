import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import {getMoviesQuery} from '../queries'

class MovieList extends Component {
  listMovies() {
    const {data} = this.props;

    if (data.loading) {
      return <div>Loading..</div>
    } else if(data.error) {
      return <div>{data.error.message}</div>
    } else {
      return data.movies.map(movie => (
        <a href="#" key={movie.id} className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{movie.title}</h5>
            <small>{movie.year}</small>
          </div>
          <p className="mb-1">{movie.description}</p>
          <small>Director: {movie.director.name}</small>
        </a>
      ))
    }
  }

  render() {
    return (
      <div>
        <h1 className="h3 text-center">Movies</h1>
        <div className="list-group">
          {this.listMovies()}
        </div>
      </div>
    );
  }
}

export default graphql(getMoviesQuery)(MovieList);
