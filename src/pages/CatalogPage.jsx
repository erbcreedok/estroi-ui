import {useCallback, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {observer} from "mobx-react";
import {Box, capitalize, Typography} from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";

import {useStore} from "../store";
import {Container} from "../components/Container";
import {Flex} from "../components/Flex";
import {ProductsGrid} from "../components/ProductsGrid";
import {CATEGORY_TREE_WIDTH} from "../constants/sizes";
import {COLORS} from "../constants/colors";
import {ProductItem} from "../components/ProductItem";
import {BaseLink} from "../components/BaseLink";
import {routerService} from "../services/routerService";
import {Breadcrumbs} from "../components/Breadcrumbs";
import {CategoriesList} from "../components/CategoriesList";
import {CategoriesGrid} from "../components/CategoriesGrid";

export const CatalogPage = observer(() => {
  const [params] = useSearchParams()
  const categoryId = params.get('categoryId')
  const page = params.get('page')
  const navigate = useNavigate()
  const {categoryStore, productsStore} = useStore()
  const {categories, currentCategory, currentCategoryList, breadcrumbs} = categoryStore
  const {products, pageInfo} = productsStore

  useEffect(() => {
    categoryStore.selectCategory(categoryId)
    productsStore.fetchProducts(categoryId, page)
  }, [categoryId, page, categoryStore, productsStore])

  const onCategoryChange = useCallback((categoryId) => {
    navigate(routerService.catalog({ categoryId }))
  }, [navigate])

  return (
    <Container my="20px">
      <Breadcrumbs links={breadcrumbs} my="20px" />
      <Typography display="flex" fontSize="32px" mb="10px" fontWeight="500" color={COLORS.gray.darker} alignItems="center">
        { currentCategory?.parentId && (
          <BaseLink
            to={routerService.catalog({ categoryId: currentCategory.parentId })}
            style={{ display: 'flex', alignItems: 'center' }}>
            <ChevronLeft sx={{ height: '32px', width: '32px'}} />
          </BaseLink>
        )}
        { currentCategory ? capitalize(currentCategory.name) : 'Каталог' }
      </Typography>
      <Flex gap="20px">
        <Flex sx={{ display: { xs: 'none', md: 'flex' }}} flexDirection="column" width={CATEGORY_TREE_WIDTH} minWidth={CATEGORY_TREE_WIDTH} maxHeight="100vh" overflow="scroll">
          <CategoriesList
            categories={currentCategoryList}
            onChange={onCategoryChange}
            value={categoryId}
          />
        </Flex>
        <Box maxWidth="100%" flexGrow={1}>
          {!currentCategory?.parentId
            ? <CategoriesGrid categories={currentCategory?.childCategories ?? categories} mb={2} />
            : (
              <ProductsGrid products={products} pageInfo={pageInfo} onPageChange={(e, page) => navigate(routerService.catalog({ categoryId, page: page - 1 }))}>
                {(product) => (
                  <BaseLink to={routerService.product(product.id)}>
                    <ProductItem product={product} hoverable />
                  </BaseLink>
                )}
              </ProductsGrid>
            )
          }
        </Box>
      </Flex>
    </Container>
  )
})
