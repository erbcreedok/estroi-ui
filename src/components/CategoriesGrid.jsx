import styled from "@emotion/styled";
import {CategoryCount, CategoryItem, CategoryTitle} from "./CategoryItem";
import {BaseLink} from "./BaseLink";

const Grid = styled.div`
  display: grid;
  grid-template-columns: (1fr);
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 33.33%);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 25%);
  }
  gap: 10px;
`
export const CategoriesGrid = ({ data }) => {
  return (
    <Grid>
      {data.map((item) => (
        <BaseLink key={item.id} to={`?categoryId=${item.id}`}>
          <CategoryItem>
            <CategoryTitle>{item.name}</CategoryTitle>
            <CategoryCount>{item.childCount}</CategoryCount>
          </CategoryItem>
        </BaseLink>
      ))}
    </Grid>
  )
}
