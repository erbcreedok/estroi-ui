import {ReactComponent as NoDataImage} from "../assets/images/no-data.svg"
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Box} from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Label = styled(Box)`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${COLORS.gray.dark};
  margin-top: 20px;

`
export const NoDataPlaceholder = ({ label, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <NoDataImage />
      <Label>{label}</Label>
    </Wrapper>
  )
}
