const express = require("express")
const router = express.Router()
const empresasController = require("../controllers/empresas.controller")


router.post("/", empresasController.create)
router.get("/", empresasController.find)
router.get("/:id", empresasController.findOne)
router.put("/:id", empresasController.update)
router.delete("/:id", empresasController.remove)



module.exports = router  