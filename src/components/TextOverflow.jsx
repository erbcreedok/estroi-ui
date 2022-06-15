import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import {css} from "@emotion/react";

export const TextOverflow = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ inline }) => inline && css`
    display: inline;
  `}
`
