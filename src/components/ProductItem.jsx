import {GrayBox} from "./GrayBox";
import styled from "@emotion/styled";

const Wrapper = styled(GrayBox)`
  align-items: flex-start;
  height: 100%;
`
export const ProductItem = ({ product, hoverable }) => {
  return (
    <Wrapper hoverable={hoverable}>
      {product.name}
    </Wrapper>
  )
}
