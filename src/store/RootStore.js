import {autorun, makeAutoObservable} from "mobx";
import {CategoryStore} from "./CategoryStore";
import {ProductsStore} from "./ProductsStore";
import {ProductStore} from "./ProductStore";

export class RootStore {
  categoryStore = new CategoryStore(this)
  productsStore = new ProductsStore(this)
  productStore = new ProductStore(this)

  constructor() {
    makeAutoObservable(this)

    autorun(() => {
      this.categoryStore.fetchCategories()
    })
  }
}
