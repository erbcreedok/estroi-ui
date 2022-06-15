
export const findCategory = (searchId, category) => {
  if (Array.isArray(category)) {
    for (let c of category) {
      const r = findCategory(searchId, c)
      if (r) return r
    }
  } else {
    if (!searchId || !category) return;
    if (category.id + '' === searchId + '') return category;
    return findCategory(searchId, category.childCategories)
  }
}

export const findCategoryPath = (searchId, categories, deep = 0) => {
  const find = findCategory(searchId, categories)
  if (!find) {
    return []
  }
  if (!find.id || !find.parentId) {
    return [find]
  }
  return [...findCategoryPath(find.parentId, categories, deep + 1), find]
}
