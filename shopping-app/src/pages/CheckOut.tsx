import React from "react"
import { Link, NavLink } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import watch from "../images/watch.jpg"
import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import CheckoutForm from "../components/CheckoutForm"
import images from "../Image/images"
import CheckoutItem from "../components/CheckoutList"
import Button from "@mui/material/Button"

const Wrapper = styled.section`
  padding-top: 150px;
  background-color: var(--color-f5f5f7);
`

const CheckoutLeftData = styled.div``

const UserDetails = styled.div``

const H4Title = styled.h4``
const H3WebsiteName = styled.h3``
const BreadCrumbItem = styled(Breadcrumb.Item)`
  font-size: 16px;
  color: var(--color-777777);
`
const Checkout = () => {
  return (
    <Wrapper>
      <Container fluid={"xxl"} className="checkout-wrapper home-wrapper-2">
        <Row>
          <Col xs={6}>
            <CheckoutLeftData className="checkout-left-data">
              <H3WebsiteName className="website-name">Storage</H3WebsiteName>
              <Breadcrumb>
                <NavLink to="/cart" className="breadcrumb-item text-dark">
                  Cart
                </NavLink>
                <BreadCrumbItem active>Information</BreadCrumbItem>
                <BreadCrumbItem active>Shipping</BreadCrumbItem>
                <BreadCrumbItem active>Payment</BreadCrumbItem>
              </Breadcrumb>

              <H4Title className="title total">Contact Information</H4Title>
              <UserDetails className="user-details total mb-3">
                Son Nguyen (sonhainguyen2201@gmail.com)
              </UserDetails>
              <h4>Shipping Address</h4>
              <CheckoutForm />
            </CheckoutLeftData>
          </Col>
          <Col xs={6}>
            <div className="border-bottom pb-4">
              <CheckoutItem />
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Checkout
