import {makeAutoObservable, reaction} from "mobx";
import {fetchCategories} from "../fetchers/fetchCategories";
import {findCategory, findCategoryPath} from "../utils/categoryUtils";

export class CategoryStore {
  loading = false
  error = null
  categories = []
  selectedId = null
  expanded = []

  constructor(store) {
    this.store = store
    makeAutoObservable(this, { store: false })

    reaction(() => [this.selectedId, this.categories], ([id, categories]) => {
      this.expanded = findCategoryPath(id, categories).slice(0, -1).map((item) => `${item.id}`)
    })
  }

  get currentCategory() {
    return findCategory(this.selectedId, this.categories)
  }

  *fetchCategories() {
    this.loading = true
    this.error = null
    try {
      this.categories = yield fetchCategories()
    } catch (error) {
      this.error = error
    } finally {
      this.loading = false
    }
  }

  selectCategory = (id) => {
    this.selectedId = id
  }

  onCategoryExpand = (id) => {
    if (this.expanded.includes(id)) {
      this.expanded = this.expanded.filter((item) => item !== id)
    } else {
      this.expanded.push(id)
    }
  }
}
