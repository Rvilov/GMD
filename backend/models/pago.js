const mongoose = require('mongoose')

const PagoSchema = new mongoose.Schema({
  PresupuestoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Presupuesto' },
  ObreroID: { type: mongoose.Schema.Types.ObjectId, ref: 'Obrero' },
  Monto: Number
})

module.exports = mongoose.model('Pago', PagoSchema)
