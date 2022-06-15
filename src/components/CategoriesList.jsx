import React from 'react'
import PropTypes from "prop-types";
import {Flex} from "./Flex";
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {OverflowTooltip} from "./OverflowTooltip";
import {CategoryCount} from "./CategoryItem";

const CategoryListItem = styled(Flex)`
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  background: ${({ active }) => active && COLORS.green.default };
  color: ${({ active }) => active && 'white' };
  cursor: pointer;
  border-radius: 4px;
`

export const CategoriesList = ({ categories, value, onChange }) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryListItem
          key={category.id}
          onClick={() => onChange(category.id)}
          active={category.id+'' === value+''}
        >
          <OverflowTooltip text={category.name} />
          <CategoryCount>
            {category.childCount}
          </CategoryCount>
        </CategoryListItem>
      ))}
    </>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
}
