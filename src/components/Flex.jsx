import styled from "@emotion/styled";
import {Box} from "@mui/material";
import PropTypes from "prop-types";

export const Flex = styled(Box)`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
`

Flex.propTypes = {
  ...Box.propTypes,
  inline: PropTypes.bool,
}
