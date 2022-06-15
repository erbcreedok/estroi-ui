import {Box, Typography} from "@mui/material";
import {COLORS} from "../constants/colors";
import styled from "@emotion/styled";
import {Container} from "./Container";
import {Link} from "react-router-dom";

const Wrapper = styled(Box)`
  background: ${COLORS.gray.lighter};
  overflow: auto;
`

export const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Container my={3}>
        <Typography fontSize={18}>E-Stroi.kz</Typography>
        <Typography>"<Link to="/" target="_blank">E-stroi.kz</Link>" - онлайн каталог спецтоваров</Typography>
      </Container>
    </Wrapper>
  )
}
