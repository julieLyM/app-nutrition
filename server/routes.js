const getBrandRoute = require("./routes/brandRouter");

const routes = app => {
  app.use("/v1/api/", getBrandRoute);
};

module.exports = routes;
