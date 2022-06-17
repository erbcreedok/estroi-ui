import {CategoryItem} from "./CategoryItem";
import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {css} from "@emotion/react";

const gridColumns = { xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }

const BorderedGrid = styled(Grid)`
  border: 1px solid ${COLORS.gray.lighter};
  border-left: none;
  border-top: none;
  ${({ theme }) => Object.keys(gridColumns).map((breakpoint) => css`
    ${theme.breakpoints.only(breakpoint)} {
      &:nth-of-type(-n+${gridColumns[breakpoint]}) {
        border-top: 1px solid ${COLORS.gray.lighter};
      }
      &:nth-of-type(${gridColumns[breakpoint]}n + 1) {
        border-left: 1px solid ${COLORS.gray.lighter};
      }
    }
  `)}
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
