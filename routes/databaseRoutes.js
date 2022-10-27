const express = require("express");
const router = express.Router();
const databaseController = require("../controllers/databaseController");

router.get("/mostrarUsuarios", databaseController.getUsuarios);

router.post("/agregarUsuario", databaseController.postUsuario);

module.exports = router;
