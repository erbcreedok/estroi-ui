import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";
import PropTypes from "prop-types";

export const BaseLink = styled(({ hoverUnderline, ...rest}) => <Link {...rest} />)`
  text-decoration: inherit;
  color: inherit;
  ${({ hoverUnderline }) => hoverUnderline && css`
    &:hover {
      text-decoration: underline;
    }
  `}
`

BaseLink.propTypes = {
  hoverUnderline: PropTypes.bool,
}
