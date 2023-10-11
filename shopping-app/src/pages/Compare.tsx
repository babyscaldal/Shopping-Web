import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Container, Row, Col } from "react-bootstrap"
import Color from "../components/Colors"
import images from "../Image/images"
import Image from "../components/Image"

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`
const CompareProductCard = styled.section`
  padding: 20px 15px;
  background-color: white;
  border-radius: 10px;
`

export const Cross = styled.img`
  top: 15px;
  right: 15px;
  width: 25px;
  padding: 3px;
  cursor: pointer;
`
const CompareTitle = styled.div`
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  color: var(--color-1c1c1b);
`
const ComparePrice = styled.div`
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`
const CompareProductDetail = styled.div``
const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export default function Compare() {
  useTitle("Compare Product")

  return (
    <Wrapper>
      <Container fluid={"xxl"} className="py-5 home-wrapper-2">
        <Row>
          <Col xs={3}>
            <CompareProductCard className="position-relative">
              <Cross
                src={images.cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <Image
                src={images.smartWatchs2}
                alt="watch"
                width="270px"
                height="270px"
              />

              <CompareProductDetail>
                <CompareTitle>
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </CompareTitle>
                <ComparePrice className="mb-3 mt-3">$ 100</ComparePrice>

                <div>
                  <ProductDetail className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </ProductDetail>
                </div>
              </CompareProductDetail>
            </CompareProductCard>
          </Col>
          <Col xs={3}>
            <CompareProductCard className="compare-product-card position-relative">
              <Cross
                src={images.cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <Image
                src={images.smartWatchs}
                alt="watch"
                width="270px"
                height="270px"
              />
              <CompareProductDetail className="compare-product-details">
                <CompareTitle>
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </CompareTitle>
                <ComparePrice className="mb-3 mt-3">$ 100</ComparePrice>

                <div>
                  <ProductDetail className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </ProductDetail>
                  <ProductDetail className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </ProductDetail>
                </div>
              </CompareProductDetail>
            </CompareProductCard>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
