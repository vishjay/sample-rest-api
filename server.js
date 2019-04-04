const express = require('express');
const lodash = require('lodash');

const app = express();
const movies = [
    {
      id : "243ff4eb-5ff6-4ed3-a17f-64c42140bd4f",
      name : "Venom",
      imdb : 7.6,
      category : ["superhero"]
    },
    {
        id : "5653821e-857a-4e65-826c-aecfe81c01e1",
        name : "Bohemian Rhapsody",
        imdb : 8.1,
        category : ["music"]
    },
    {
        id : "38523f0d-0ec6-48c2-89b6-27382d3abb9d",
        name : "Aquaman",
        imdb : 8.0,
        category : ["superhero"]
    },
    {
        id : "568fd428-34cb-46ca-be97-d8aed1a4b649",
        name : "Annihilation",
        imdb : 6.7,
        category : ["horror"]
    },
    {
        id : "7b2579d1-37bf-49c0-8cab-a45685ad5198",
        name : "Mission: Impossible – Fallout",
        imdb : 8.0,
        category : ["action"]
    },
    {
        id : "1f6f83fb-38a4-4de1-98be-c08ee98b0bbd",
        name : "First Man",
        imdb : 6.4,
        category : ["history"]
    },
    
];

/*middleware*/


/*routes*/

//home
app.get('/',(req, res) => {

    res.send({
        message : 'Welcome to sample-rest-api'
    });
});


//get all customer details
app.get('/api/movies',(req, res) => {

    res.send(movies);
});


//get a specific movie given the id
app.get('/api/movies/:id',(req, res) => {

    res.send(lodash.filter(movies, m => m.id === req.params.id ));
});



/*setting up server*/
//creates the server and starts listening.
app.listen(3000, () => {

    console.log("Server started and is accessible on http://localhost:3000");
})