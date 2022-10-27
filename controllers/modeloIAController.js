const path = require("path");
const teachableMachine = require("@sashido/teachablemachine-node");

const model = new teachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/s8siFg5eo/",
});

exports.getFormularioImagen = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "formularioImagen.html"));
};

exports.postUpload = async (req, res) => {
  const { image } = req.files;
  if (!image) return res.send("Error al enviar imagen");
  await image.mv(path.join(__dirname, "..", "public", "img", image.name));
  model
    .classify({
      imageUrl: "http://localhost:8080/img/" + image.name,
    })
    .then((prediction) => {
      res.send(prediction);
    })
    .catch((err) => {
      res.send(err);
    });
};
