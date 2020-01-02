const getBrandRoute = require("./routes/brandRouter");

const routes = app => {
  app.use("/api/v1/brands", getBrandRoute);
};

module.exports = routes;
