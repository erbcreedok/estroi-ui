import {Grid} from "@mui/material";
import {ProductItem} from "./ProductItem";

export const ProductsGrid = ({ products }) => {
  return (
    <Grid container spacing={1}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3}>
          <ProductItem hoverable product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
