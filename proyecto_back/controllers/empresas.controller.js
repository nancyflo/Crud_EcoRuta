const Empresa = require("../models/empresas.model")

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let empresa = new Empresa({
        razon_social: req.body.razon_social,
        nit: req.body.nit,
        rut: req.body.rut,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    })

    empresa.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la empresa"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La empresa se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Empresa.find(function(err, empresas){
        res.json(empresas)
    })
}
exports.findOne = function(req,res){
    Empresa.findOne({_id: req.params.id},function(err, empresa){
        res.json(empresa)
    })
}
exports.update = function(req,res){
    let empresa = {
        razon_social: req.body.razon_social,
        nit: req.body.nit,
        rut: req.body.rut,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    }

    Empresa.findByIdAndUpdate(req.params.id, {$set: empresa}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar la empresa"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empresa modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Empresa.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la empresa"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La empresa ha sido eliminada correctamente"
        res.json(response)
    })
}   