import axios from 'axios'

export const fetchCategories = () => {
  return axios.get('https://e-stroi.kz/api/catalog/client/category/all?lang=ru').then(res => res.data)
}
