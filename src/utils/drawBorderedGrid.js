import {COLORS} from "../constants/colors";
import {css} from "@emotion/react";

export const drawBorderedGrid = (gridColumns) => ({ theme }) => css`
  border: 1px solid ${COLORS.gray.lighter};
  border-left: none;
  border-top: none;
  ${Object.keys(gridColumns).map((breakpoint) => css`
    ${theme.breakpoints.only(breakpoint)} {
      &:nth-of-type(-n+${gridColumns[breakpoint]}) {
        border-top: 1px solid ${COLORS.gray.lighter};
      }
      &:nth-of-type(${gridColumns[breakpoint]}n + 1) {
        border-left: 1px solid ${COLORS.gray.lighter};
      }
    }
  `)}
`
