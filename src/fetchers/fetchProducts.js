import axios from "axios";

export const fetchProducts = async (categoryId) => {
  const { token } = await axios.post(`http://e-stroi.kz:8081/auth/server/security/customer/login`, {
    phone: "77079009025",
    password: "1234"
  }).then((res) => res.data)

  return axios.get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=${categoryId}`).then((res) => res.data)
}
