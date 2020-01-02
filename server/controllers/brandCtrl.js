const { getBrandStore } = require("../stores/brandStore");

const brandController = async (req, res) => {
  const { query } = req.query;

  const queries = await getBrandStore(query);
  res.send(queries);
};

module.exports = { brandController };
