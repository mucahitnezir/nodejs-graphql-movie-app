'use strict';

const directorMutations = {
  addDirector: async (parent, args, {Director}) => {
    const director = new Director({
      ...args.data
    });
    return director.save();
  }
};

module.exports = directorMutations;
