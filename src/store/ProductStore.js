import {makeAutoObservable} from "mobx";
import {fetchProduct} from "../fetchers/fetchProduct";

export class ProductStore {
  product = null
  loading = false
  error = null

  constructor(store) {
    this.store = store
    makeAutoObservable(this, { store: false })
  }

  *fetchProduct(productId) {
    this.loading = true
    this.error = null
    try {
      this.product = yield fetchProduct(productId)
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }
}
