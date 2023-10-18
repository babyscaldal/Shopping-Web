import styled from "styled-components"
import { Col, Container, Row } from "react-bootstrap"

import { useAppSelector } from "../app/hooks"
import { popularProductsState } from "../app/Redux/products/productSlice"
import ProductCard from "./ProductCard"

const PopularWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const Heading = styled.h3`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 30px;
`

export default function PopularList() {
  const popularList = useAppSelector(popularProductsState)
  return (
    <PopularWrapper className="py-5">
      <Container fluid="xxl">
        <Row className="g-3 text-center text-md-start">
          <Col xs={12}>
            <Heading>Our Popular Products</Heading>
          </Col>
          {popularList?.map((product, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </PopularWrapper>
  )
}
