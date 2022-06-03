import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";

export const CategoryCount = styled.span`
  display: inline-flex;
  min-width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background: ${COLORS.darkGray};
  border-radius: 16px;
`

export const CategoryTitle = styled.span`
  display: block;
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
`


export const CategoryItem = styled.div`
  display: flex;
  cursor: pointer;
  height: 60px;
  box-sizing: border-box;
  align-items: center;
  background: ${COLORS.lightGray};
  border-radius: 4px;
  padding: 10px;
  transition: .15s;
  &:hover {
    background: ${COLORS.gray};
    transition: 0s;
  }
`
