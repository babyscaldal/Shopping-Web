import styled from "styled-components"
import useTitle from "../hooks/useTitle"
import { Col, Container, Row } from "react-bootstrap"
import { blogList } from "../data/data"
import BlogCard from "../components/BlogCard"
import { FilterCard, FilterTitle } from "./OurStore"

const Wrapper = styled.section`
  padding-top: 160px;
`

export default function Blog() {
  useTitle("Blogs")
  return (
    <Wrapper>
      <Container fluid="xxl" className="blog-wrapper home-wrapper-2 py-5">
        <Row className="g-3">
          <Col xs={3}>
            <FilterCard className="filter-card mb-3">
              <FilterTitle className="filter-title">
                Find By Categories
              </FilterTitle>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </FilterCard>
          </Col>
          <Col xs={9}>
            <Row className="g-3">
              {blogList.map((blog, index) => (
                <Col key={index} xs={6}>
                  <BlogCard blog={blog} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
