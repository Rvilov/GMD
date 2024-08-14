const mongoose = require('mongoose')

const ObreroSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Especialidad: String,
  Teléfono: String,
  Correo: String
})

module.exports = mongoose.model('Obrero', ObreroSchema)
