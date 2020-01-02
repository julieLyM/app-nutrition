const axios = require("axios");
const auth = require("../utils/auth");

const API_KEY = auth.API_KEY;
const APP_ID = auth.APP_ID;

const getBrandStore = async query => {
  try {
    const {
      data: { hits }
    } = await axios.get(
      `https://api.nutritionix.com/v1_1/brand/search?query=${query}&min_score=1&appId=${APP_ID}&appKey=${API_KEY}`
    );
    return hits;
  } catch (e) {
    return e;
  }
};
module.exports = { getBrandStore };
