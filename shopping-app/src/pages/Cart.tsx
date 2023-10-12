import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Col, Container, Row } from "react-bootstrap"
import CartTable from "../components/CartTable"
import CartPayment from "../components/CartPayment"

const Wrapper = styled.section`
  padding-top: 150px;
  background-color: var(--color-f5f5f7);
`

const StickyParent = styled.div`
  position: relative;
`
const StickyChild = styled.div`
  position: sticky;
  top: 200px;
`

export default function Cart() {
  useTitle("Cart")
  return (
    <Wrapper>
      <Container fluid="xxl" className="cart-wrapper home-wrapper-2">
        <Row className="g-3">
          <Col xs={9}>
            <StickyParent>
              <StickyChild>
                <CartTable />
              </StickyChild>
            </StickyParent>
          </Col>
          <Col xs={2} className="flex-grow-1">
            <CartPayment />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
