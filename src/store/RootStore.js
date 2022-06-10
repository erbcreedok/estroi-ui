import {makeAutoObservable} from "mobx";
import {CategoryStore} from "./CategoryStore";
import {ProductStore} from "./ProductStore";

export class RootStore {
  categoryStore = new CategoryStore(this)
  productStore = new ProductStore(this)

  constructor() {
    makeAutoObservable(this)
  }
}
