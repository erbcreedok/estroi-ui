import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Link} from "react-router-dom";

export const Text = styled.span`
  font-size: 20px;
  color: ${COLORS.darkerGray};
`
export const Breadcrumb = styled(Link)`
  font-size: 20px;
  color: ${COLORS.darkerGray};
`
export const Breadcrumbs = ({ links, ...props }) => {
  return (
    <div {...props}>
      {links.map((link, index) => (
        index + 1 !== links.length ? (
          <>
            <Breadcrumb to={link.to}>{ link.label }</Breadcrumb>
            <Text style={{ margin: '0 8px' }}>></Text>
          </>
        )
          : <Text>{ link.label }</Text>
      ))}
    </div>
  )
}
