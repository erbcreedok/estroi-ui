import {Grid} from "@mui/material";
import {ProductItem} from "./ProductItem";
import {NoDataPlaceholder} from "./NoDataPlaceholder";

export const ProductsGrid = ({ products }) => {
  return (
    products?.length > 0 ? (
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={6} lg={3}>
            <ProductItem hoverable product={product} />
          </Grid>
        ))}
      </Grid>
    ) : (
      <NoDataPlaceholder label="Нет товаров" />
    )
  )
}
