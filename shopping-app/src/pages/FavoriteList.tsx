import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import { productList } from "../data/data"

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`

export default function FavoriteList() {
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
