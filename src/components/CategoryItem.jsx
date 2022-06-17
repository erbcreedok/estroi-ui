import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Box, Slide, Typography} from "@mui/material";
import {TextOverflow} from "./TextOverflow";
import {BaseLink} from "./BaseLink";
import {routerService} from "../services/routerService";
import {forwardRef, useCallback, useMemo, useRef, useState} from "react";
import {Flex} from "./Flex";


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
  margin-bottom: 20px;
`

export const CategoryBox = styled(Box)`
  flex-direction: column;
  align-items: normal;
  cursor: pointer;
  transition: .15s;
  gap: 10px;
  overflow: hidden;
`

export const CategoryImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin: 0 auto 10px;
`

export const SubcategoryItem = styled(Box)`
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  background: white;
  padding: 6px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed ${COLORS.gray.light}; 
  &:last-child {
    border-bottom: none;
  }
`

export const CategoryItem = forwardRef(({ category, limit, ...rest }, ref) => {
  const [collapsed, setCollapsed] = useState(true)
  const thisRef = useRef()
  const containerRef = ref ?? thisRef

  const childCategories = useMemo(() =>
      category.childCategories?.map((item, index) => ({ ...item, hidden: limit < index + 1 }))
  , [category.childCategories, limit])

  const visibleChildren = useMemo(() => childCategories?.filter((c) => !c.hidden), [childCategories])
  const hiddenChildren = useMemo(() => childCategories?.filter((c) => c.hidden), [childCategories])

  const diffLimit = useMemo(() => Math.max((category.childCategories ?? [])?.length - limit, 0), [limit, category.childCategories])

  const renderSubcategory = useCallback((subcategory) => (
    <SubcategoryItem key={subcategory.id} >
      <TextOverflow whiteSpace="nowrap">
        <BaseLink to={routerService.catalog({ categoryId: subcategory.id })} hoverUnderline>
          {subcategory.name}
        </BaseLink>
      </TextOverflow>
      <CategoryCount>{subcategory.childCount}</CategoryCount>
    </SubcategoryItem>
  ),[])

  return (
    <CategoryBox {...rest} ref={containerRef}>
      <BaseLink to={routerService.catalog({ categoryId: category.id })} hoverUnderline hoverColor>
        {category.imgName && <CategoryImage src={category.imgName} alt="" /> }
        <CategoryTitle>{category.name}</CategoryTitle>
      </BaseLink>
      {visibleChildren?.map(renderSubcategory)}
        <Slide direction="left" in={!collapsed} mountOnEnter unmountOnExit container={containerRef.current}>
          <Flex flexDirection="column" gap="10px">
            {hiddenChildren?.map(renderSubcategory)}
          </Flex>
        </Slide>
      {!!diffLimit && (
        <Typography color={COLORS.green.default} mt="20px" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '+' : '-'} {diffLimit} категории
        </Typography>
      )}
    </CategoryBox>
  )
})
