const express = require("express");
const path = require("path");
const app = express();
const sequelize = require("./utils/database");

const fileUpload = require("express-fileupload");
const modeloIARoutes = require("./routes/modeloIARoutes");
const databaseRoutes = require("./routes/databaseRoutes");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.use(modeloIARoutes);
app.use("/usuario", databaseRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});
sequelize
  .sync()
  .then((resultado) => {
    console.log("Conexion exitosa con la BD");
    app.listen(port, () => {
      console.log(`Server is listening in http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
