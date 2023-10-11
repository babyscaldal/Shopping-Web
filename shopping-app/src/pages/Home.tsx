import { Button, Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import images from "../Image/images"
import { Link } from "react-router-dom"
import ServiceItem from "../components/ServiceItem"
import {
  blogList,
  brandList,
  categories,
  famousList,
  productList,
  smallerCart,
  totalServices,
} from "../data/data"
import CategoryItem from "../components/CaregoryItem"
import Marquee from "react-fast-marquee"
import Image from "../components/Image"
import BlogCard from "../components/BlogCard"
import ProductCard from "../components/ProductCard"
import SpecialProduct from "../components/SpecialProduct"
import FamousProductItem from "../components/FamousProductItem"
import useTitle from "../hooks/useTitle"

const FirstHomeWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const SpecialProductsWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const ServicesWrapper = styled.section``

const FamousWrapper = styled.section`
  background-color: var(--color-f5f5f7);
  h5 {
    font-size: 13px;
    line-height: 20px;
    font-weight: 400px;
    color: white;
    margin-bottom: 7px;
    text-transform: uppercase;
  }
  h6 {
    font-size: 24px;
    line-height: 38px;
    font-weight: 500;
    color: white;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 100;
    color: white;
  }
`

const CategoriesWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`
const MainBanner = styled.div``

const MainBannerContent = styled.div`
  top: 15%;
  left: 5%;

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-bf4800);
    margin: 0 0 12px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  h5 {
    font-size: 42px;
    line-height: 54px;
    letter-spacing: -2px;
    font-weight: 500;
    text-transform: none;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.4px;
    color: var(--color-131921);
  }
`
const SmallerBanner = styled.div``

const SmallerBannerContent = styled.div`
  top: 25%;
  left: 10%;

  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-bf4800);
    margin: 0 0 12px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  h5 {
    font-size: 22px;
    line-height: 34px;
    letter-spacing: -2px;
    font-weight: 500;
    text-transform: none;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.4;
    color: var(--color-131921);
  }
`
const Services = styled.div`
  background-color: #fff;
  padding: 20px 20px;
  border-radius: 10px;
`

const Categories = styled.div``

const MarqueeWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const MarqueeInner = styled.div`
  background-color: white;
  box-shadow: 0 0 10px #0000001a;
  padding: 15px;
`

const BlogWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const ProductWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const PopularWrapper = styled.section`
  background-color: var(--color-f5f5f7);
`

const Heading = styled.h3`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 30px;
`

const AllWrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`

export default function Home() {
  useTitle("Storage")
  return (
    <AllWrapper>
      <FirstHomeWrapper className="pt-3 pb-5">
        <Container fluid="xxl">
          <Row className="g-3">
            <Col xs={6}>
              <MainBanner className="position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={images.mainBanner}
                  alt="mainBanner"
                />
                <MainBannerContent className="p-3 position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPAD S13+ Pro.</h5>
                  <p>From &999.00 or $41.62/mo.</p>
                  <Link to="">
                    <Button variant="secondary" className="button">
                      BUY NOW
                    </Button>
                  </Link>
                </MainBannerContent>
              </MainBanner>
            </Col>
            <Col xs={6}>
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <Row className="g-3">
                  {smallerCart.map((cart, index) => (
                    <Col key={index} xs={6}>
                      <SmallerBanner className="position-relative">
                        <img
                          className="img-fluid rounded-3"
                          src={cart.image}
                          alt="mainBanner"
                        />
                        <SmallerBannerContent className="position-absolute w-50">
                          <h4>{cart.title}</h4>
                          <h5>{cart.product}</h5>
                          <p>{cart.info}</p>
                        </SmallerBannerContent>
                      </SmallerBanner>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </FirstHomeWrapper>
      <ServicesWrapper className="py-5">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <Heading>Services</Heading>
            </Col>
            <Col xs={12}>
              <Services className="d-flex align-items-center justify-content-between">
                {totalServices.map((service, index) => (
                  <ServiceItem key={index} service={service} />
                ))}
              </Services>
            </Col>
          </Row>
        </Container>
      </ServicesWrapper>
      <CategoriesWrapper>
        <div
          className="py-5"
          style={{ backgroundColor: "var(--color-f5f5f7)" }}
        >
          <Container fluid="xxl">
            <Categories>
              <Row className="g-3">
                <Col xs={12}>
                  <Heading>Categories List</Heading>
                </Col>
                {categories.map((category, index) => (
                  <Col key={index} xs={3}>
                    <CategoryItem category={category} />
                  </Col>
                ))}
              </Row>
            </Categories>
          </Container>
        </div>
      </CategoriesWrapper>
      <ProductWrapper className="py-5">
        <Container fluid="xxl">
          <Row className="g-3">
            <Col xs={12}>
              <Heading>Featured Collection</Heading>
            </Col>
            {productList.map((product, index) => (
              <Col key={index} xs={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </ProductWrapper>
      <FamousWrapper className="py-5">
        <Container fluid="xxl">
          <Row>
            {famousList.map((famous, index) => (
              <Col key={index} xs={3}>
                <FamousProductItem index={index} famous={famous} />
              </Col>
            ))}
          </Row>
        </Container>
      </FamousWrapper>
      <SpecialProductsWrapper className="py-5">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <Heading>Special Products</Heading>
            </Col>
            <Col xs={6} className="mb-3">
              <SpecialProduct />
            </Col>
            <Col xs={6} className="mb-3">
              <SpecialProduct />
            </Col>
            <Col xs={6} className="mb-3">
              <SpecialProduct />
            </Col>
          </Row>
        </Container>
      </SpecialProductsWrapper>
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
      <MarqueeWrapper className="py-5">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <MarqueeInner className="bg-white p-3">
                <Marquee className="d-flex">
                  {brandList.map((brand, index) => (
                    <Image
                      className="mx-4"
                      key={index}
                      src={brand}
                      alt="brand"
                      height="150px"
                      width="150px"
                    />
                  ))}
                </Marquee>
              </MarqueeInner>
            </Col>
          </Row>
        </Container>
      </MarqueeWrapper>
      <BlogWrapper className="py-5">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <Heading>Our Latest Blogs</Heading>
            </Col>
            {blogList.map((blog, index) => (
              <Col key={index} xs={3}>
                <BlogCard blog={blog} />
              </Col>
            ))}
          </Row>
        </Container>
      </BlogWrapper>
    </AllWrapper>
  )
}
