import {autorun, makeAutoObservable} from "mobx";
import {fetchCompanies} from "../fetchers/fetchCompanies";

export class CompanyStore {
  companies = []
  error = null
  loading = false
  selected = null
  page = 0
  pageInfo = {
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
  }
  constructor(store) {
    this.store = store
    makeAutoObservable(this, { store: false })
    autorun(() => {
      this.fetchCompanies({ page: this.page })
    })
  }

  *fetchCompanies(params) {
    this.loading = true
    this.error = null
    try {
      const data = yield fetchCompanies(params)
      this.companies = data.content
      this.pageInfo = {
        currentPage: data.number,
        totalPages: data.totalPages,
        totalElements: data.totalElements,
      }
    } catch (e) {
      this.error = e
    } finally {
      this.loading = true
    }
  }

  selectCompany = (company) => {
    this.selected = company
  }
  setPage = (page) => {
    this.page = page
  }
}
