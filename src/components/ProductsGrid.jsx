import {Grid, Pagination} from "@mui/material";
import {NoDataPlaceholder} from "./NoDataPlaceholder";
import {Flex} from "./Flex";

export const ProductsGrid = ({ products, children, pageInfo, onPageChange }) => {
  return (
    products?.length > 0 ? (
      <>
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={12} md={6} lg={3}>
              { children(product) }
            </Grid>
          ))}
        </Grid>
        {pageInfo?.totalPages > 1 && (
          <Flex my={1} justifyContent="center">
            <Pagination
              count={pageInfo.totalPages}
              page={pageInfo.currentPage + 1}
              onChange={onPageChange}
              shape="rounded"
            />
          </Flex>
        )}
      </>
    ) : (
      <NoDataPlaceholder label="Нет товаров" />
    )
  )
}
