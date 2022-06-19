import {Box, Container, Typography} from "@mui/material";
import {COLORS} from "../constants/colors";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Wrapper = styled(Box)`
  background: ${COLORS.gray.lighter};
  overflow: auto;
`

export const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Container sx={{ my: 3 }} maxWidth="xl">
        <Typography fontSize={18}>E-Stroi.kz</Typography>
        <Typography>"<Link to="/" target="_blank">E-stroi.kz</Link>" - Самый удобный сайт по поиску стройматериалов в Казахстане</Typography>
      </Container>
    </Wrapper>
  )
}
