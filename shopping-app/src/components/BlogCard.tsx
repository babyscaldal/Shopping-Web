import React from "react"
import { Card, Button } from "react-bootstrap"
import styled from "styled-components"
import { IBlogList } from "../data/data"
import { Link } from "react-router-dom"

interface BlogCard {
  blog: IBlogList
}

const BlogItem = styled(Card)`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Date = styled(Card.Text)`
  font-size: 13px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--color-777777);
  padding: 0;
`

const Title = styled(Card.Title)`
  font-size: 18px;
  color: var(--color-131921);
`

const Description = styled(Card.Text)`
  font-size: 13px;
  line-height: 22px;
  color: var(--color-777777);
`

const CardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  object-position: center;
`
export default function BlogCard({ blog }: BlogCard) {
  const { image, title, date } = blog
  return (
    <BlogItem style={{ width: "100%" }}>
      <CardImg className="blogCard-img" variant="top" src={image} />
      <Card.Body>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sit libero velit.
        </Description>
        <Link to="/blogs/:id" className="button px-3 py-2 rounded rounded-pill">
          Read More
        </Link>
      </Card.Body>
    </BlogItem>
  )
}
