import {CategoryItem} from "./CategoryItem";
import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {drawBorderedGrid} from "../utils/drawBorderedGrid";

const gridColumns = { xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }

const BorderedGrid = styled(Grid)`
  ${drawBorderedGrid(gridColumns)}
  padding: 20px;
`

export const CategoriesGrid = ({ categories, ...rest }) => {
  return (
    <Grid container columns={gridColumns} {...rest}>
      {categories.map((category) => (
        <BorderedGrid item xs={2} sm={1} key={category.id} height="auto" maxWidth="100%">
          <CategoryItem category={category} limit={3} height="100%" />
        </BorderedGrid>
      ))}
    </Grid>
  )
}
