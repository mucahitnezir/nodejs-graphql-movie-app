import React, {Component} from 'react';
import {Query, Mutation} from 'react-apollo';

import {getDirectorsQuery, getMoviesQuery, addMovieMutation} from '../queries'

class NewMovieForm extends Component {
  state = {
    title: '',
    description: '',
    year: null,
    directorId: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation mutation={addMovieMutation}>
        {(addMovie, {loading, error}) => (
          <form onSubmit={e => {
            e.preventDefault();
            addMovie({
              variables: {
                title: this.state.title,
                description: this.state.description,
                year: parseInt(this.state.year),
                directorId: this.state.directorId
              },
              refetchQueries: [{query: getMoviesQuery}]
            })
          }}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" className="form-control" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="form-control" rows="3" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input type="number" name="year" id="year" className="form-control" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="directorId">Director</label>
              <select name="directorId" id="directorId" className="form-control" onChange={this.onChange}>
                <option value="">Choose one director</option>
                <Query query={getDirectorsQuery}>
                  {({loading, error, data}) => {
                    if (loading) return <option disabled={true}>Loading..</option>;
                    if (error) return <option disabled={true}>Error</option>;

                    return data.directors.map(director => <option key={director.id}
                                                                  value={director.id}>{director.name}</option>)
                  }}
                </Query>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Save</button>
            {error && <div>{error.message}</div>}
            {loading && <div>Loading..</div>}
          </form>
        )}
      </Mutation>
    );
  }
}

export default NewMovieForm;
