import {makeAutoObservable} from "mobx";
import {fetchProduct} from "../fetchers/fetchProduct";
import {routerService} from "../services/routerService";
import {findCategoryPath} from "../utils/categoryUtils";

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

  get categoryList() {
    if (!this.product || !this.store) return []
    return findCategoryPath(this.product.categories[0]?.id, this.store.categoryStore.categories)
  }

  get breadcrumbs() {
    if (!this.product) return []

    return [
      { label: 'Главная', to: routerService.home() },
      { label: 'Каталог', to: routerService.catalog() },
      ...this.categoryList.map((category) => ({
        label: category.name, to: routerService.catalog({ categoryId: category.id })
      })),
      { label: this.product.name, to: routerService.product(this.product.id)}
    ]
  }
}
