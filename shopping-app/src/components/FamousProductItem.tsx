import React from "react"
import images from "../Image/images"
import styled from "styled-components"
import { IFamouseList } from "../data/data"

const FamousContent = styled.div`
  top: 10%;
  left: 5%;
`

const FamousItem = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px #0000001a;

  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  transition: all 0.3s;

  &:hover {
    transform: scale(0.95);
  }
`

interface IFamousProductItem {
  famous: IFamouseList
  index?: number
}

export default function FamousProductItem({
  famous,
  index,
}: IFamousProductItem) {
  const { detail, description, image, productname } = famous
  return (
    <FamousItem className="famous-card position-relative rounded-3">
      <img src={image} className="img-fluid rounded rounded-3" alt="famous" />
      <FamousContent className="position-absolute">
        <h5 className={index === 0 ? "text-white" : "text-dark"}>{detail}</h5>
        <h6 className={index === 0 ? "text-white" : "text-dark"}>
          {productname}
        </h6>
        <p className={index === 0 ? "text-white" : "text-dark"}>
          {description}
        </p>
      </FamousContent>
    </FamousItem>
  )
}
