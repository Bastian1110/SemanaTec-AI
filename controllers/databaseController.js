const Usuario = require("../models/databaseModel");
const bycrypt = require("bcrypt");

exports.getUsuarios = async (req, res) => {
  try {
    let registros = await Usuario.findAll();
    res.send(registros);
  } catch (error) {
    console.log(error);
    res.send("Ocurrio un error");
  }
};

exports.postUsuario = (req, res) => {
  console.log(req.body);
  let hashPswd = bycrypt.hashSync(req.body.password, 10);
  let newUser = { usuario: req.body.usuario, password: hashPswd };
  Usuario.create(newUser)
    .then((resultado) => {
      console.log("Registro exitoso");
      res.send("Registro exitoso");
    })
    .catch((error) => {
      console.log(error);
      res.send("Fallo");
    });
};
