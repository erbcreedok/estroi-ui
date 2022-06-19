import {makeAutoObservable} from "mobx";
import {fetchProducts} from "../fetchers/fetchProducts";
import {searchProducts} from "../fetchers/searchProducts";

export class ProductsStore {
  products = []
  loading = false
  error = null
  pageInfo = {
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
  }
  constructor(store) {
    this.store = store
    makeAutoObservable(this)
  }

  *fetchProducts(categoryId, page = 0) {
    this.loading = true
    this.error = null
    try {
      const response = yield fetchProducts(categoryId, page)
      this.products = response.content
      this.pageInfo = {
        currentPage: response.number,
        totalPages: response.totalPages,
        totalElements: response.totalElements,
      }
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }

  *searchProducts(name) {
    this.loading = true
    this.error = null
    try {
      const response = yield searchProducts({ name })
      this.products = response.content
      this.pageInfo = {
        currentPage: response.number,
        totalPages: response.totalPages,
        totalElements: response.totalElements,
      }
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
