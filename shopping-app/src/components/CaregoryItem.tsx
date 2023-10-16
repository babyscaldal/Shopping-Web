import styled from "styled-components"
import { ICategory, featureImages } from "../data/data"
import Image from "./Image"
import { IProductResponse } from "../app/Redux/products/productType"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  allProductsState,
  electronicsState,
  getProductsInCategory,
  jewelryState,
  menClothingState,
  womenClothingState,
} from "../app/Redux/products/productSlice"
import toCapitalize from "../utils/toCapitalize"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.div`
  border: 1px solid var(--color-ededed);
  box-shadow: 0 0 10px #0000001a;
  padding: 0 10px;
  height: 120px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.05);
  }
`

interface ICategoryItem {
  item: string
  quantity: number
  index: number
}

export default function CategoryItem({ item, quantity, index }: ICategoryItem) {
  const allProducts = useAppSelector(allProductsState)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <Wrapper
      onClick={() => {
        dispatch(getProductsInCategory(item))
        navigate(`/product/${item}`)
      }}
      className="d-flex gap-30 align-items-center justify-content-between"
    >
      <div>
        <h6>{toCapitalize(item)}</h6>
        <p>{quantity} Items</p>
      </div>
      {featureImages.map((item, imageIndex) => {
        if (imageIndex === index) {
          return (
            <Image
              key={imageIndex}
              src={item}
              alt={item}
              height="100px"
              width="100px"
            />
          )
        }
      })}
    </Wrapper>
  )
}
