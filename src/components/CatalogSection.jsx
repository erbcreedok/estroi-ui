import {observer} from "mobx-react";
import {Box, Grid, Typography} from "@mui/material";
import {useStore} from "../store";
import styled from "@emotion/styled";
import {routerService} from "../services/routerService";
import {BaseLink} from "./BaseLink";
import {COLORS} from "../constants/colors";
import {css} from "@emotion/react";

const Image = styled.img`
  width: 100px;
  height: 100px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const gridColumns = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 7,
  xl: 8,
}
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
  img {
    transition: .15s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const TextOverflow = styled(Typography)`
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`

export const CatalogSection = observer(() => {
  const { categoryStore: { categories } } = useStore()
  return (
    <>
      <Typography fontSize="20px" color={COLORS.gray.darker} mb={3}>Категории</Typography>
      <Grid container spacing={0} columns={gridColumns}>
        {categories.map((category) => (
          <BorderedGrid key={category.id} item xs={1} py={2} px={1} textAlign="center">
            <BaseLink to={routerService.catalog({ categoryId: category.id })}>
              <Box mb={2}>
                <Image src={category.imgName} alt="" />
              </Box>
              <TextOverflow color={COLORS.gray.darker}>{category.name}</TextOverflow>
            </BaseLink>
          </BorderedGrid>
        ))}
      </Grid>
    </>
  )
})
