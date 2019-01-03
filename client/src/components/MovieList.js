import React, {Component} from 'react';
import {graphql, Query} from 'react-apollo';
import {Modal} from 'antd';
import 'antd/dist/antd.min.css'

import {getMoviesQuery, getMovieQuery} from '../queries'

class MovieList extends Component {
  state = {visible: false, activeId: null};

  showModal = (id) => {
    this.setState({
      visible: true,
      activeId: id
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  listMovies() {
    const {data} = this.props;

    if (data.loading) {
      return <div>Loading..</div>
    } else if (data.error) {
      return <div>{data.error.message}</div>
    } else {
      return data.movies.map(movie => (
        <button key={movie.id} className="list-group-item list-group-item-action" onClick={(e) => {
          e.preventDefault();
          this.showModal(movie.id);
        }}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{movie.title}</h5>
            <small>{movie.year}</small>
          </div>
          <p className="mb-1">{movie.description}</p>
          <small>Director: {movie.director.name}</small>
        </button>
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
        <Modal
          title="Detail of movie"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div>
            <Query query={getMovieQuery} variables={{id: this.state.activeId}}>
              {({loading, error, data}) => {
                if (loading) return <div>Loading..</div>;
                if (error) return <div>{error.message}</div>;
                // this.setState({title: data.movie.title});
                return (
                  <div className="font-weight-bold">
                    <h3>{data.movie.title}</h3>
                    <p>Year: {data.movie.year}</p>
                    <p>Description: {data.movie.description}</p>
                    <h4>Director: {data.movie.director.name}</h4>
                    <h5>Other Films of The Director:</h5>
                    {data.movie.director.movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
                  </div>
                )
              }}
            </Query>
          </div>
        </Modal>
      </div>
    );
  }
}

export default graphql(getMoviesQuery)(MovieList);
