import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {COLORS} from "../constants/colors";
import {Box} from "@mui/material";

export const GrayBox = styled(Box)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background: ${COLORS.gray.lighter};
  border-radius: 4px;
  padding: 10px;
  ${({ hoverable }) => hoverable && css`
    transition: .15s;
    cursor: pointer;
    &:hover {
      background: ${COLORS.gray.light};
      transition: 0s;
    }
  `}
`
