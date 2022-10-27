const express = require("express");
const router = express.Router();
const modeloIAController = require("../controllers/modeloIAController");

router.get("/formularioImagen", modeloIAController.getFormularioImagen);
router.post("/upload", modeloIAController.postUpload);

module.exports = router;
