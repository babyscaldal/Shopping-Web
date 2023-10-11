import { NavLink } from "react-router-dom"
import { HiOutlineArrowLeft } from "react-icons/hi"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import images from "../Image/images"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const Wrapper = styled.section`
  padding-top: 160px;
  background-color: var(--color-f5f5f7);
`
const SingleBlogCard = styled.div`
  a {
    font-size: 18px;
    color: var(--color-777777);
    margin-bottom: 20px;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-1c1c1b);
  }
  p {
    color: var(--color-777777);
    font-size: 14px;
  }
`
const SingleBlog = () => {
  return (
    <Wrapper>
      <Container fluid={"xxl"} className="blog-wrapper home-wrapper-2 py-5">
        <Row>
          <Col xs={12}>
            <div className="single-blog-card">
              <NavLink to="/blogs" className="d-flex align-items-center gap-10">
                <ArrowBackIcon /> Go back to Blogs
              </NavLink>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <img
                src={images.blog1}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                You’re only as good as your last collection, which is an
                enormous pressure. I think there is something about luxury –
                it’s not something people need, but it’s what they want. It
                really pulls at their heart. I have a fantastic relationship
                with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                vestibulum pretium commodo inceptos cum condimentum placerat
                diam venenatis blandit hac eget dis lacus a parturient a
                accumsan nisl ante vestibulum.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default SingleBlog
