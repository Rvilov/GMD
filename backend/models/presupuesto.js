const mongoose = require('mongoose')

const PresupuestoSchema = new mongoose.Schema({
  ProyectoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
  Item: String,
  Descripción: String,
  Cantidad: Number,
  PrecioUnitario: Number,
  Total: Number
})

module.exports = mongoose.model('Presupuesto', PresupuestoSchema)
