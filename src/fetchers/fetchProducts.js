import axios from "axios";

export const fetchProducts = async (categoryId, page = 0) => {
  return axios.get(
    `http://e-stroi.kz:8082/catalog/client/item`,
    { params: { categoryId, page }}
  ).then((res) => res.data)
}
