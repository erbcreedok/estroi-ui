import {autorun, makeAutoObservable} from "mobx";
import {fetchCategories} from "../fetchers/fetchCategories";
import {findCategory, findCategoryPath} from "../utils/categoryUtils";
import {routerService} from "../services/routerService";

export class CategoryStore {
  loading = false
  error = null
  categories = []
  selectedId = null
  expanded = []

  constructor(store) {
    this.store = store
    makeAutoObservable(this, { store: false })

    autorun(() => {
      this.expanded = findCategoryPath(this.selectedId, this.categories).slice(0, -1).map((item) => `${item.id}`)
    })
  }

  get currentCategory() {
    return findCategory(this.selectedId, this.categories)
  }

  get currentCategoryList() {
    if (!this.currentCategory?.parentId) {
      return this.categories
    }
    if (this.currentCategory?.childCategories) {
      return this.currentCategory.childCategories
    }
    const parent = findCategory(this.currentCategory.parentId, this.categories)
    return parent.childCategories
  }

  get breadcrumbs() {
    return [
      { to: routerService.home(), label: 'Главная' },
      { to: routerService.catalog(), label: 'Каталог' },
      ...findCategoryPath(this.selectedId, this.categories).map((category) => ({
        to: routerService.catalog({ categoryId: category.id }),
        label: category.name
      })),
    ]
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
