import axios from "axios";

export const fetchProduct = async (productId) => {
  return axios.get(
    `http://e-stroi.kz:8082/catalog/client/item/${productId}`,
  ).then((res) => res.data)
}
