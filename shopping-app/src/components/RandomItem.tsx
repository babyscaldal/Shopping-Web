// import { Rating } from "@mui/material"
// import React from "react"
// import styled from "styled-components"
// import { IProductResponse } from "../app/Redux/products/productType"

// const RandomProducts = styled.div`
//   h5 {
//     font-size: 14px;
//     margin-bottom: 8px;
//   }

//   &:first-child {
//     border-bottom: 1px solid var(--color-ededed);
//   }
// `
// interface IRandomItem {
//   products: IProductResponse[]
// }

// export default function RandomItem({ products }: IRandomItem) {
//   return (
//     <RandomProducts className="mb-3 d-flex">
//       <div className="w-50">
//         <img src="images/watch.jpg" className="img-fluid" alt="watch" />
//       </div>
//       <div className="w-50">
//         <h5>Kids headphones bulk 10 pack multi colored for students</h5>
//         <Rating size="small" name="simple-controlled" value={5} />
//         <p className="m-0 font-weight-bold">$ 300</p>
//       </div>
//     </RandomProducts>
//   )
// }

import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

import { IProductResponse } from "../app/Redux/products/productType"
import Image from "./Image"
import styled from "styled-components"

interface IRandomItem {
  product: IProductResponse
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.25s linear;
  box-shadow: 0 0 10px #0000001a;
  border: 1px solid #ccc;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
  }
`

const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--color-131921);
  text-overflow: ellipsis;
  overflow: hidden;
`

export default function RandomItem({ product }: IRandomItem) {
  return (
    <>
      <Wrapper>
        <Image
          contain
          width="80px"
          height="80px"
          alt={product?.title}
          src={product?.image}
        />
        <div>
          <Title className="m-0">{product?.title}</Title>
          <p className="m-0">${product?.price}</p>
        </div>
      </Wrapper>
    </>
  )
}
