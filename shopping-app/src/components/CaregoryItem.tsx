import React from "react"
import styled from "styled-components"
import { ICategory } from "../data/data"
import Image from "./Image"

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
  category: ICategory
}

export default function CategoryItem({ category }: ICategoryItem) {
  const { image, product, quantity } = category
  return (
    <Wrapper className="d-flex gap-30 align-items-center justify-content-between">
      <div>
        <h6>{product}</h6>
        <p>{quantity} Items</p>
      </div>
      <Image src={image} alt={product} height="100px" width="100px" />
    </Wrapper>
  )
}
