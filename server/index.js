const express = require("express");
const middlewares = require("./middlewares");
const routes = require("./routes");

const app = express();

middlewares(app);
routes(app);

app.listen(process.env.PORT || 5000, () =>
  console.log(`j'ecoute le port 5000`)
);
