import React from "react"
import { Card, Button } from "react-bootstrap"
import styled from "styled-components"
import { IBlogList } from "../data/data"
import { Link } from "react-router-dom"
import { IBlogResponse } from "../app/Redux/blogs/blogType"

interface BlogCard {
  blog: IBlogResponse
}

const BlogItem = styled(Card)`
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.25s linear;
  &:hover {
    transform: scale(1.02);
  }
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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Description = styled(Card.Text)`
  font-size: 13px;
  line-height: 22px;
  color: var(--color-777777);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`

const CardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  object-position: center;
`
export default function BlogCard({ blog }: BlogCard) {
  return (
    <BlogItem style={{ width: "100%" }}>
      <CardImg className="blogCard-img" variant="top" src={blog?.image} />
      <Card.Body>
        <Date>{blog?.createdAt}</Date>
        <Title>{blog?.title}</Title>
        <Description>{blog?.title}</Description>
        <a href={blog?.url} className="button px-3 py-2 rounded rounded-pill">
          Read More
        </a>
      </Card.Body>
    </BlogItem>
  )
}
