import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";
import PropTypes from "prop-types";
import {COLORS} from "../constants/colors";

export const BaseLink = styled(({ hoverUnderline, hoverColor, ...rest}) => <Link {...rest} />)`
  text-decoration: inherit;
  color: inherit;
  ${({ hoverUnderline }) => hoverUnderline && css`
    &:hover {
      text-decoration: underline;
    }
  `}
  ${({ hoverColor }) => hoverColor && css`
    &:hover {
      color: ${COLORS.green.default}
    }
  `}
`

BaseLink.propTypes = {
  hoverUnderline: PropTypes.bool,
  hoverColor: PropTypes.bool,
}
