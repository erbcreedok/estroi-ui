import {Container} from "../components/Container";
import {useCallback, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Flex} from "../components/Flex";
import {Box} from "@mui/material";
import {CategoriesTree} from "../components/CategoriesTree";
import {useStore} from "../store";
import {observer} from "mobx-react";
import {ProductsGrid} from "../components/ProductsGrid";

export const HomePage = observer(() => {
  const [params] = useSearchParams()
  const categoryId = params.get('categoryId')
  const navigate = useNavigate()
  const { categoryStore, productStore } = useStore()
  const { categories, expanded, selectedId } = categoryStore
  const { products } = productStore

  useEffect(() => {
    categoryStore.fetchCategories()
  }, [categoryStore])

  useEffect(() => {
    categoryStore.selectCategory(categoryId)
    productStore.fetchProducts(categoryId)
  }, [categoryId, categoryStore, productStore])

  const onCategoryChange = useCallback((categoryId) => {
    navigate(`?categoryId=${categoryId}`)
  }, [navigate])

  return (
    <Container style={{marginTop: '20px'}}>
      <Flex sx={{ gap: '8px' }}>
        <Box sx={{ width: '300px', minWidth: '300px', maxHeight: '100vh', overflow: 'auto' }}>
          <CategoriesTree
            categories={categories}
            onChange={onCategoryChange}
            onNodeToggle={categoryStore.onCategoryExpand}
            selected={[selectedId+'']}
            expanded={expanded}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <ProductsGrid products={products} />
        </Box>
      </Flex>
    </Container>
  )
})
