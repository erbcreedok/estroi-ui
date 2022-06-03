import {CategoriesGrid} from "../components/CategoriesGrid";
import {Container} from "../components/Container";
import {useEffect, useMemo, useState} from "react";
import {fetchCategories} from "../fetchers/fetchCategories";
import {useSearchParams} from "react-router-dom";
import {Breadcrumbs} from "../components/Breadcrumbs";
import {NoDataPlaceholder} from "../components/NoDataPlaceholder";
import {fetchProducts} from "../fetchers/fetchProducts";


const findCategory = (searchId, category) => {
  if (!searchId || !category || category.id + '' === searchId + '') return category;
  if (category.childCategories) {
    for (let c of category.childCategories) {
      const r = findCategory(searchId, c)
      if (r) return r
    }
  }
}

const findCategoryPath = (searchId, rootCategory) => {
  const find = findCategory(searchId, rootCategory)
  if (!find || !find.id) {
    return [rootCategory]
  }
  return [...findCategoryPath(find.parentId, rootCategory), find]
}

const getRootCategory = (childCategories = []) => ({id: undefined, name: 'Главная', childCategories})

export const HomePage = () => {
  const [rootCategory, setRootCategory] = useState(getRootCategory())
  const [params] = useSearchParams()
  const categoryId = params.get('categoryId')

  useEffect(() => {
    fetchCategories().then(getRootCategory).then(setRootCategory)
    fetchProducts(189)
  }, [])

  const currentCategory = useMemo(() => {
    return findCategory(categoryId, rootCategory)
  }, [rootCategory, categoryId])

  const links = useMemo(() => findCategoryPath(categoryId, rootCategory).map((category) => ({
    to: category?.id ? '/?categoryId=' + category.id : '/',
    label: category.name
  })), [categoryId, rootCategory])

  return (
    <Container style={{marginTop: '20px'}}>
      <Breadcrumbs links={links} style={{marginBottom: '20px'}}/>
      {currentCategory?.childCategories?.length > 0 && (
        <CategoriesGrid data={currentCategory?.childCategories}/>
      )}
      {currentCategory?.childCategories?.length === 0 && (
        <NoDataPlaceholder label="Нет подкатегории" />
      )}
    </Container>
  )
}
