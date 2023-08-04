const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image:String,
  description:String,
  showtimes: [String],
})

const Movies = mongoose.model("Movies", moviesSchema) 
// el Model es LA HERRAMIENTA con la que vamos a la base de datos a hacer cualquier gestion

module.exports = Movies //se exporta el modelo para poder usarlo en otros archivos