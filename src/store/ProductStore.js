import {makeAutoObservable} from "mobx";
import {fetchProducts} from "../fetchers/fetchProducts";

export class ProductStore {
  products = []
  pageable = null
  loading = false
  error = null
  constructor(store) {
    this.store = store
    makeAutoObservable(this, { store: false })
  }

  *fetchProducts(categoryId) {
    this.loading = true
    this.error = null
    try {
      const response = yield fetchProducts(categoryId)
      this.products = response.content
      this.pageable = response.pageable
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
