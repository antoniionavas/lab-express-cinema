const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index')); 


/* GET movies page */
router.get("/movies", (req, res, next) => {

    // 1. buscar los documentos de la colección pokemons
    Movies.find()
    
    .then((movies) => {
      // 2. obtener solo los nombres
      console.log(movies)
      console.log("Mostrando las peliculas")
      // 3. renderizar una vista
      res.render('movies', {MoviesName: movies }); 
    })
    .catch((error) => {
      next(error)
    })
  })

  router.get("/movies/:movieId", (req, res, next) => {
    
    let movieId = req.params.movieId;

    console.log(movieId)
    Movies.findById(movieId)
    .then((response) => {
      console.log(response)
      
      res.render("moviesDetails.hbs", {
        movie: response
      })
      // como renderizamos la data en la vista
    })
    .catch((error) => {
      next(error)
    })
  
  })




module.exports = router;
