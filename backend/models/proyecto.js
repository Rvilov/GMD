const mongoose = require('mongoose')

const ProyectoSchema = new mongoose.Schema({
  Nombre: String,
  Descripción: String,
  FechaInicio: Date,
  FechaFinEstimada: Date,
  ClienteID: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  PresupuestoTotal: Number,
  Estado: String
})

module.exports = mongoose.model('Proyecto', ProyectoSchema)
