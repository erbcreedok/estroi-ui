import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useStore} from "../store";
import {observer} from "mobx-react";

export const ProductPage = observer(() => {
  const params = useParams()
  const { productId } = params
  const { productStore } = useStore()
  const { product } = productStore

  useEffect(() => {
    productStore.fetchProduct(productId)
  }, [productId, productStore])

  return (
    <div>Product: {product?.name}</div>
  )
})
