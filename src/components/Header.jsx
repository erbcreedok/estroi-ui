import styled from "@emotion/styled";
import {Container} from "./Container";
import {COLORS} from "../constants/colors";
import {BaseLink} from "./BaseLink";

const Wrapper = styled.div`
  height: 60px;
  background: ${COLORS.gray.light};
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 100%;
`
export const Header = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <BaseLink to="/">E-Stroi.kz</BaseLink>
      </StyledContainer>
    </Wrapper>
  )
}
