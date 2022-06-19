import React, {useEffect, useMemo} from 'react'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useStore} from "../store";
import {observer} from "mobx-react";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {Flex} from "../components/Flex";
import {Breadcrumbs} from "../components/Breadcrumbs";
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {BaseLink} from "../components/BaseLink";
import {StoreModal} from "../components/StoreModal";

const ImageBox = styled(Box)`
  width: 400px;
  height: 400px;
  padding: 10px;
  border: 1px solid ${COLORS.gray.lighter};
  max-width: 100%;
  flex-shrink: 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

export const ProductPage = observer(() => {
  const params = useParams()
  const { productId } = params
  const { productStore } = useStore()
  const { product, loading, breadcrumbs } = productStore
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    productStore.fetchProduct(productId)
  }, [productId, productStore])


  const selectedStoreItem = useMemo(() => {
    if (!hash || !product) {
      return false
    }
    const storeId = hash.split('#store=')[1]
    return product.storeItems.find(({ store }) => store.id+'' ===  storeId)
  }, [hash, product])

  if (loading || !product) {
    return (
      <Flex alignItems="center" height="200px" justifyContent="center">
        <CircularProgress size={40} />
      </Flex>
    )
  }


  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Breadcrumbs links={breadcrumbs} my="20px" />
      <Flex my={2} gap={2} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap '}}}>
        <ImageBox>
          <img src={product.mainImg} alt="" />
        </ImageBox>
        <Flex flexDirection="column" gap={2} minWidth="320px">
          <Typography fontSize={32} component="h1">{product.name}</Typography>
          <Typography>
            {product.description}
          </Typography>
          {product.storeItems.length > 0 && (
            <Flex mt={3} flexDirection="column" gap={2}>
              <Typography fontSize={20}>Магазины</Typography>
              {product.storeItems.map(({availabilityId, id, price, store}) => (
                <Flex key={id} alignItems="center" borderBottom={`1px dashed ${COLORS.gray.default}`} pb={2}>
                  <Box>
                    <BaseLink hoverColor to={{ hash: `#store=${store.id}` }}>
                      <Typography fontWeight="bold">{store.name}</Typography>
                    </BaseLink>
                    <Typography fontSize={12} color={COLORS.gray.dark}>{store.address}</Typography>
                  </Box>
                  <Box ml="auto">
                    {availabilityId === 0 && <Typography fontSize={14} color={COLORS.gray.dark}>Нет в наличии</Typography>}
                    <Typography color={COLORS.gray.darker} fontWeight="bold">{price} тг</Typography>
                  </Box>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
      <StoreModal open={!!selectedStoreItem} storeItem={selectedStoreItem} onClose={() => navigate({ hash: '' })} />
    </Container>
  )
})
