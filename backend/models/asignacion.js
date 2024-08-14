const mongoose = require('mongoose')

const AsignacionSchema = new mongoose.Schema({
  ProyectoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
  ObreroID: { type: mongoose.Schema.Types.ObjectId, ref: 'Obrero' },
  FechaAsignacion: Date,
  HorasTrabajadas: Number
})

module.exports = mongoose.model('Asignacion', AsignacionSchema)
