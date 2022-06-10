import {Container} from "../components/Container";
import {useCallback, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Flex} from "../components/Flex";
import {Box, capitalize, Typography} from "@mui/material";
import {CategoriesTree} from "../components/CategoriesTree";
import {useStore} from "../store";
import {observer} from "mobx-react";
import {ProductsGrid} from "../components/ProductsGrid";
import {CATEGORY_TREE_WIDTH} from "../constants/sizes";
import {COLORS} from "../constants/colors";

export const HomePage = observer(() => {
  const [params] = useSearchParams()
  const categoryId = params.get('categoryId')
  const navigate = useNavigate()
  const {categoryStore, productStore} = useStore()
  const {categories, expanded, currentCategory, selectedId} = categoryStore
  const {products} = productStore

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

  console.log(currentCategory)

  return (
    <Container mt="20px">
      <Flex gap="20px">
        <Flex flexDirection="column" width={CATEGORY_TREE_WIDTH} minWidth={CATEGORY_TREE_WIDTH} maxHeight="100vh">
          <Typography fontSize="20px" mb="10px" fontWeight="500" color={COLORS.gray.darker}>Категории</Typography>
          <Box height="100%" overflow="scroll">
            <CategoriesTree
              categories={categories}
              onChange={onCategoryChange}
              onNodeToggle={categoryStore.onCategoryExpand}
              selected={[selectedId + '']}
              expanded={expanded}
            />
          </Box>
        </Flex>
        <Box flexGrow="1">
          {currentCategory && <Typography fontSize="32px" mb="10px" fontWeight="500" color={COLORS.gray.darker}>{capitalize(currentCategory.name)}</Typography>}
          <ProductsGrid products={products}/>
        </Box>
      </Flex>
    </Container>
  )
})
