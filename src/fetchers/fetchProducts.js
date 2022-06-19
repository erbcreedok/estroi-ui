import axios from "axios";

export const fetchProducts = async (categoryId, page = 0) => {
  return axios.get(
    `https://e-stroi.kz/api/catalog/client/item`,
    { params: { categoryId, page }}
  ).then((res) => res.data)
}
