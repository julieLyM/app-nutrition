import axios from "axios";

export const brandSearch = async query => {
  const data = await axios.get(`/api/v1/brands`, { params: { query } });
  console.log(data);
  return data;
};
