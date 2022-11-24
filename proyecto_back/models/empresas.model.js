const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpresasSchema = new Schema({
    razon_social:{type: String, required: true, max:200},
    nit:{type: String, required: true, max:80},
    rut:{type: String, required: true, max:80},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
    direccion:{type: String, required: false, max:150}
});

module.exports = mongoose.model("empresas", EmpresasSchema);