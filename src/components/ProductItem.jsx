import styled from "@emotion/styled";
import {Box} from "@mui/material";

const Wrapper = styled(Box)`
  align-items: flex-start;
  height: 100%;
  min-height: 48px;
  padding: 10px;
  & img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`
export const ProductItem = ({ product, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <img src={product.mainImg} alt="" />
      {product.name}
    </Wrapper>
  )
}
