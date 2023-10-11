import React from "react"
import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Container, Row, Col } from "react-bootstrap"
import { Cross } from "./Compare"
import ProductCard from "../components/ProductCard"
import { productList } from "../data/data"

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`

const WishlistCard = styled.section``

const WishlistCardTitle = styled.section`
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-1c1c1b);
`
const WishlistCardPrice = styled.section`
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`

export default function WishList() {
  useTitle("Wishlist")

  return (
    <Wrapper>
      <Container fluid="xxl" className="home-wrapper-2 py-5">
        <Row>
          {productList.map((product, index) => (
            <Col xs={2} key={index}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  )
}
