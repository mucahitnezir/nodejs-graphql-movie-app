'use strict';

const movies = [
  {
    id: '1',
    title: 'Van Helsing',
    description: 'Description of the van helsing',
    year: 2005,
    directorId: '1'
  },
  {
    id: '2',
    title: 'Black Mirror',
    description: 'Description of the black mirror',
    year: 2005,
    directorId: '2'
  },
  {
    id: '3',
    title: 'Transformers',
    description: 'Description of the transformers',
    year: 2017,
    directorId: '3'
  },
  {
    id: '4',
    title: 'Interstellar',
    description: 'Description of the interstellar',
    year: 2014,
    directorId: '2'
  },
  {
    id: '5',
    title: 'Batman',
    description: 'Description of the batman',
    year: 2014,
    directorId: '1'
  }
];

const directors = [
  {
    id: '1',
    name: 'Mücahit Nezir',
    birth: 1997
  },
  {
    id: '2',
    name: 'Alper Kişmir',
    birth: 1989
  },
  {
    id: '3',
    name: 'Serdar Özbilen',
    birth: 1985
  },
];


module.exports = {
  movies,
  directors
};
