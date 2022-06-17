import axios from 'axios'

export const fetchCompanies = (params) => {
  return axios.get('http://e-stroi.kz:8082/catalog/company', { params }).then(res => res.data)
}
