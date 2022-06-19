import axios from "axios";

export const fetchProduct = async (productId) => {
  return axios.get(
    `https://e-stroi.kz/api/catalog/client/item/${productId}`,
  ).then((res) => res.data)
}
