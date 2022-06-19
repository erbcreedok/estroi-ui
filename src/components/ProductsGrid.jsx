import {Grid, Pagination} from "@mui/material";
import {NoDataPlaceholder} from "./NoDataPlaceholder";
import {Flex} from "./Flex";
import styled from "@emotion/styled";
import {drawBorderedGrid} from "../utils/drawBorderedGrid";

const gridColumns = { xs: 1, sm: 1, md: 2, lg: 4, xl: 4}

const BorderedGrid = styled(Grid)`
  ${drawBorderedGrid(gridColumns)}
`

export const ProductsGrid = ({ products, children, pageInfo, onPageChange }) => {
  return (
    products?.length > 0 ? (
      <>
        <Grid container spacing={1} columns={gridColumns}>
          {products.map((product) => (
            <BorderedGrid key={product.id} item xs={1}>
              { children(product) }
            </BorderedGrid>
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
