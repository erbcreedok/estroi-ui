import axios from 'axios'

export const fetchCompanies = (params) => {
  return axios.get('https://e-stroi.kz/api/catalog/company', { params }).then(res => res.data)
}
