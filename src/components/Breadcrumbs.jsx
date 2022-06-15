import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import {Flex} from "./Flex";

export const Text = styled.span`
  font-size: 14px;
  color: ${COLORS.gray.darker};
`
export const Breadcrumb = styled(Link)`
  font-size: 14px;
  color: ${COLORS.gray.darker};
`
export const Breadcrumbs = ({ links, ...props }) => {
  return (
    <Box {...props}>
      {links.map((link, index) => (
        index + 1 !== links.length ? (
          <Flex inline key={link.label} alignItems="center">
            <Breadcrumb to={link.to}>{ link.label }</Breadcrumb>
            <Text style={{ margin: '0 8px' }}>></Text>
          </Flex>
        )
          : <Text key={link.label}>{ link.label }</Text>
      ))}
    </Box>
  )
}
