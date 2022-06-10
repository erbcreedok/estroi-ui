import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const Flex = styled(Box)`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
`
