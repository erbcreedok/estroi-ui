import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Box, Slide, Typography} from "@mui/material";
import {TextOverflow} from "./TextOverflow";
import {BaseLink} from "./BaseLink";
import {routerService} from "../services/routerService";
import {forwardRef, useCallback, useMemo, useRef, useState} from "react";
import {Flex} from "./Flex";
import {GrayBox} from "./GrayBox";


export const CategoryCount = styled.div`
  height: 24px;
  min-width: 24px;
  border-radius: 12px;
  margin-left: 8px;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  background: ${COLORS.gray.lighter};
  color: ${COLORS.gray.dark};
  text-decoration: none !important;
`

export const CategoryTitle = styled(TextOverflow)`
  display: block;
  flex-grow: 1;
  font-size: 20px;
`

export const CategoryBox = styled(GrayBox)`
  flex-direction: column;
  align-items: normal;
  cursor: pointer;
  transition: .15s;
  gap: 10px;
  overflow: hidden;
`

export const SubcategoryItem = styled(Box)`
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  background: white;
  border-radius: 4px;
  padding: 6px 10px;
  justify-content: space-between;
  align-items: center;
`

export const CategoryItem = forwardRef(({ category, limit, ...rest }, ref) => {
  const [collapsed, setCollapsed] = useState(true)
  const thisRef = useRef()
  const containerRef = ref ?? thisRef

  const childCategories = useMemo(() =>
      category.childCategories?.map((item, index) => ({ ...item, hidden: limit < index + 1 }))
  , [category.childCategories, limit, collapsed])

  const visibleChildren = useMemo(() => childCategories?.filter((c) => !c.hidden), [childCategories])
  const hiddenChildren = useMemo(() => childCategories?.filter((c) => c.hidden), [childCategories])

  const diffLimit = useMemo(() => Math.max((category.childCategories ?? [])?.length - limit, 0), [limit, category.childCategories])

  const renderSubcategory = useCallback((subcategory) => (
    <BaseLink key={subcategory.id} to={routerService.catalog({ categoryId: subcategory.id })} hoverUnderline>
      <SubcategoryItem>
        <TextOverflow whiteSpace="nowrap">{subcategory.name}</TextOverflow>
        <CategoryCount>{subcategory.childCount}</CategoryCount>
      </SubcategoryItem>
    </BaseLink>
  ),[])

  return (
    <CategoryBox {...rest} ref={containerRef}>
      <BaseLink to={routerService.catalog({ categoryId: category.id })} hoverUnderline>
        <CategoryTitle>{category.name}</CategoryTitle>
      </BaseLink>
      {visibleChildren?.map(renderSubcategory)}
        <Slide direction="left" in={!collapsed} mountOnEnter unmountOnExit container={containerRef.current}>
          <Flex flexDirection="column" gap="10px">
            {hiddenChildren?.map(renderSubcategory)}
          </Flex>
        </Slide>
      {!!diffLimit && (
        <Typography color={COLORS.green.default} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '+' : '-'} {diffLimit} категории
        </Typography>
      )}
    </CategoryBox>
  )
})
