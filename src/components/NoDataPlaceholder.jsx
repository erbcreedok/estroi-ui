import {ReactComponent as NoDataImage} from "../assets/images/no-data.svg"
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Label = styled.div`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${COLORS.notSoDarkGray};
  margin-top: 20px;

`
export const NoDataPlaceholder = ({ label }) => {
  return (
    <Wrapper>
      <NoDataImage />
      <Label>{label}</Label>
    </Wrapper>
  )
}
