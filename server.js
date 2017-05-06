const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

//overriding post requests with ?_method = put
app.use(methodOverride("_method"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");


app.use("/", routes);

const db = require('./models')
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  })
});

