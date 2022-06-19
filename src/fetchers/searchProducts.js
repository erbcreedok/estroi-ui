import axios from "axios";

export const searchProducts = async (params) => {
  return axios.get(
    `https://e-stroi.kz/api/catalog/client/item/byname`,
    { params }
  ).then((res) => res.data)
}
