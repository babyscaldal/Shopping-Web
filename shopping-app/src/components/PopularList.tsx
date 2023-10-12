import { productList } from "../data/data"
import ProductCard from "./ProductCard"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"

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
  return (
    <PopularWrapper className="py-5">
      <Container fluid="xxl">
        <Row>
          <Col xs={12}>
            <Heading>Our Popular Products</Heading>
          </Col>
          {productList.map((product, index) => (
            <Col key={index} xs={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </PopularWrapper>
  )
}
