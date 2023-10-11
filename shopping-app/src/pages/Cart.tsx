import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Col, Container, Row } from "react-bootstrap"
import CartTable from "../components/CartTable"

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
      <Container fluid="xxl" className="cart-wrapper home-wrapper-2 p-0">
        <Row>
          <Col xs={9}>
            <StickyParent>
              <StickyChild>
                <CartTable />
              </StickyChild>
            </StickyParent>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
