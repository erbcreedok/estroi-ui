import {CategoryItem} from "./CategoryItem";
import {Grid} from "@mui/material";

export const CategoriesGrid = ({ categories, ...rest }) => {
  return (
    <Grid container spacing="10px" columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }} {...rest}>
      {categories.map((category) => (
        <Grid item xs={2} sm={1} key={category.id} height="auto" maxWidth="100%">
          <CategoryItem category={category} limit={3} height="100%" />
        </Grid>
      ))}
    </Grid>
  )
}
