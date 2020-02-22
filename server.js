const express = require('express')
const lodash = require('lodash')
const bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1')

const app = express()
const movies = [
  {
    id: '243ff4eb-5ff6-4ed3-a17f-64c42140bd4f',
    name: 'Venom',
    imdb: 7.6,
    categories: ['superhero']
  },
  {
    id: '5653821e-857a-4e65-826c-aecfe81c01e1',
    name: 'Bohemian Rhapsody',
    imdb: 8.1,
    categories: ['music']
  },
  {
    id: '38523f0d-0ec6-48c2-89b6-27382d3abb9d',
    name: 'Aquaman',
    imdb: 8.0,
    categories: ['superhero']
  },
  {
    id: '568fd428-34cb-46ca-be97-d8aed1a4b649',
    name: 'Annihilation',
    imdb: 6.7,
    categories: ['horror']
  },
  {
    id: '7b2579d1-37bf-49c0-8cab-a45685ad5198',
    name: 'Mission: Impossible – Fallout',
    imdb: 8.0,
    categories: ['action']
  },
  {
    id: '1f6f83fb-38a4-4de1-98be-c08ee98b0bbd',
    name: 'First Man',
    imdb: 6.4,
    categories: ['history']
  }

]

/* middleware */

// this takes the json in the body and convets it a javascript object
app.use(bodyParser.json())

/* routes */

// home
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to sample-rest-api'
  })
})

// get all customer details
app.get('/api/movies', (req, res) => {
  res.send(movies)
})

// get a specific movie given the id
app.get('/api/movies/:id', (req, res) => {
  res.send(lodash.filter(movies, m => m.id === req.params.id)[0])
})

// adds new movie to the list
app.post('/api/movies', (req, res) => {
  let movie = {}

  movie.id = uuidv1().toString()
  movie.name = (req.body.name) ? req.body.name : ''
  movie.categories = (req.body.categories) ? req.body.categories : ''
  movie.imdb = (req.body.imdb) ? req.body.imdb : ''

  movies.push(movie)

  res.send({
    moviesCount: movies.length,
    newlyAddedMovie: movies[movies.length - 1]
  })
})

// modifies a movie given the id and the updates
app.put('/api/movies/:id', (req, res) => {
  var existingMovie = lodash.filter(movies, m => m.id === req.params.id)[0]
  if (existingMovie) {
    console.log(existingMovie)

    if (req.body.name) existingMovie.name = req.body.name
    if (req.body.imdb) existingMovie.imdb = req.body.imdb
  }

  res.send(existingMovie)
})

// removes a movie given the id
app.delete('/api/movies/:id', (req, res) => {
  lodash.remove(movies, {
    id: req.params.id
  })

  res.send({
    moviesCount: movies.length,
    updatedMovieList: movies
  })
})

/* setting up server */
// creates the server and starts listening.
app.listen(3000, () => {
  console.log('Server started and is accessible on http://localhost:3000')
})

module.exports = app
