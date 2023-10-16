import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"
import { Pagination } from "@mui/material"
import { IProductResponse } from "../app/Redux/products/productType"
import { useAppSelector } from "../app/hooks"
import { isLoadingState } from "../app/Redux/products/productSlice"
import SkeletonItemCard from "./ItemSkeleton"

interface IProductList {
  listItem?: IProductResponse[]
  // grid?: number
}

export default function ProductsList({ listItem }: IProductList) {
  const isLoading = useAppSelector(isLoadingState)
  return (
    <Row className="g-3">
      {listItem?.map((item, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
          {isLoading ? <SkeletonItemCard /> : <ProductCard product={item} />}
        </Col>
      ))}
    </Row>
  )
}
