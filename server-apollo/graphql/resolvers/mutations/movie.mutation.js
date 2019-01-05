'use strict';

const movieMutations = {
  addMovie: async (parent, {data}, {Director, Movie}) => {
    // Check director, if exist
    const director = await Director.findById(data.directorId);
    if (!director) {
      throw new Error('Director does not exist.')
    }

    const movie = new Movie({
      ...data
    });
    return await movie.save();
  }
};

module.exports = movieMutations;
