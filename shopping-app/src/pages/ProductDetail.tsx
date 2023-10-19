import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { Rating, ButtonGroup, Button } from "@mui/material"
import CompareIcon from "@mui/icons-material/Compare"
import FavoriteIcon from "@mui/icons-material/Favorite"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

import PopularList from "../components/PopularList"
import images from "../Image/images"
import styled from "styled-components"
import ReviewForm from "../components/ReviewForm"
import CountInputField from "../components/CountInputField"
import PhotoGallery from "../components/PhotoGallery"
import { useState } from "react"
import { useAppSelector } from "../app/hooks"
import { filterProductsListState } from "../app/Redux/products/productSlice"

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`

const MainProductDetails = styled.div`
  padding: 30px 20px;
  background-color: white;
  border-radius: 10px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  a {
    font-size: 14px;
    color: var(--color-777777);
  }
`
const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-1c1c1b);
  margin-bottom: 10px;
`
const Price = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`
const ReviewBtn = styled.a`
  color: var(--color-777777);
  font-size: 13px;
`

const ProductHeading = styled.h3`
  font-size: 14px;
  color: var(--color-1c1c1b);
  margin-bottom: 0px;
`
const ProductData = styled.p`
  font-size: 13px;
  columns: var(--color-777777);
  margin-bottom: 0px;
`

const H3Style = styled.h3`
  font-size: 26px;
  color: #1c1c1b;
  margin-bottom: 10px;
`
const ReviewInnerWrapper = styled.div`
  background-color: white;
  padding: 30px;
`
const ReviewHead = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;

  h4 {
    font-size: 18px;
    color: var(--color-1c1c1b);
  }

  p,
  a {
    font-size: 14px;
    color: var(--color-777777);
  }
`

const ReviewFormContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h4 {
    font-size: 16px;
    color: var(--color-777777);
  }
`

const ReviewContent = styled.p`
  font-size: 14px;
  color: var(--color-777777);
`

const ReviewBox = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const DescriptionWrapper = styled.div`
  font-size: 14px;
  color: var(--color-777777);
`

function ProductDetail() {
  const [orderedProduct] = useState(true)
  const filterProducts = useAppSelector(filterProductsListState)
  const params = useParams()
  const currentProduct = filterProducts?.find(
    (product) => product?.id === Number(params.id),
  )

  const closeModal = () => {}
  return (
    <Wrapper>
      <Container fluid="xxl" className="home-wrapper-2">
        <Row className="g-3">
          <Col xs={6}>
            <PhotoGallery product={currentProduct} />
          </Col>
          <Col xs={6}>
            <MainProductDetails className="main-product-details">
              <div className="border-bottom">
                <Title className="title">{currentProduct?.title}</Title>
              </div>
              <div className="border-bottom py-3">
                <Price className="price text-success">
                  ${currentProduct?.price}
                </Price>
                <div className="d-flex align-items-center gap-10">
                  <Rating
                    readOnly
                    size="small"
                    name="simple-controlled"
                    value={currentProduct?.rating?.rate}
                  />

                  <p className="mb-0 t-review">
                    ({currentProduct?.rating?.count} Reviewer)
                  </p>
                </div>
                <ReviewBtn className="review-btn" href="#review">
                  Write a Review
                </ReviewBtn>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <ProductHeading className="product-heading">
                    Type :
                  </ProductHeading>
                  <ProductData className="product-data">
                    {currentProduct?.category}
                  </ProductData>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <ProductHeading className="product-heading">
                    Brand :
                  </ProductHeading>
                  <ProductData className="product-data">APPLE</ProductData>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <ProductHeading className="product-heading">
                    Category :
                  </ProductHeading>
                  <ProductData className="product-data">
                    {currentProduct?.category}
                  </ProductData>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <ProductHeading className="product-heading">
                    Tags :
                  </ProductHeading>
                  <ProductData className="product-data">Watch</ProductData>
                </div>

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <div className="">
                    <label
                      style={{
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "var(--color-1c1c1b)",
                      }}
                      htmlFor=""
                    >
                      Quantity:
                    </label>
                    <div className="mb-3">
                      <CountInputField id={"product-detail-count"} />
                    </div>
                    <ButtonGroup
                      size="small"
                      variant="contained"
                      color="primary"
                      aria-label="action"
                    >
                      <Button
                        startIcon={<AddShoppingCartIcon />}
                        color="warning"
                      >
                        Buy It Now
                      </Button>
                      <Button startIcon={<CompareIcon />} color="info">
                        Add to compare
                      </Button>
                      <Button
                        startIcon={<AddShoppingCartIcon />}
                        color="secondary"
                      >
                        Add to Cart
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </MainProductDetails>
          </Col>
        </Row>
      </Container>
      <Container
        fluid="xxl"
        className="description-wrapper py-5 home-wrapper-2"
      >
        <Row>
          <Col xs={12}>
            <DescriptionWrapper>
              <H3Style>Description</H3Style>
              <div className="bg-white p-3">
                <p>{currentProduct?.description}</p>
              </div>
            </DescriptionWrapper>
          </Col>
        </Row>
      </Container>
      <Container fluid="xxl" className="reviews-wrapper home-wrapper-2">
        <Row>
          <Col xs={12}>
            <H3Style id="review">Reviews</H3Style>
            <ReviewInnerWrapper className="review-inner-wrapper">
              <ReviewHead className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </ReviewHead>
              <ReviewFormContainer className="review-form py-4">
                <h4>Write a Review</h4>
                <ReviewForm />
              </ReviewFormContainer>
              <div className="reviews mt-4">
                <ReviewBox className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Son Nguyen</h6>
                    <Rating
                      size="small"
                      name="simple-controlled"
                      value={5}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue)
                      // }}
                    />
                  </div>
                  <ReviewContent className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </ReviewContent>
                </ReviewBox>
              </div>
            </ReviewInnerWrapper>
          </Col>
        </Row>
      </Container>
      <PopularList />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        // tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img
                    src={images.smartWatchs}
                    className="img-fluid"
                    alt="product imgae"
                  />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Apple Watch</h6>
                  <p className="mb-1">Quantity: asgfd</p>
                  <p className="mb-1">Color: asgfd</p>
                  <p className="mb-1">Size: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                View My Cart
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal()
                }}
              >
                Continue To Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductDetail
