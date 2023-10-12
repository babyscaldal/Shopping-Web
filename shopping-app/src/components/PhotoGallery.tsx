import React from "react"
import Image from "./Image"
import { Col, Container, Row } from "react-bootstrap"

export default function PhotoGallery() {
  return (
    <Container>
      <Row className="g-2">
        <Col xs={12}>
          <Image
            width="100%"
            height="300px"
            alt="detail-picture"
            src={
              "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
            }
          />
        </Col>
        <Col xs={6}>
          <Image
            width="100%"
            height="150px"
            alt="detail-picture"
            src={
              "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
            }
          />
        </Col>
        <Col xs={6}>
          <Image
            width="100%"
            height="150px"
            alt="detail-picture"
            src={
              "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
            }
          />
        </Col>
        <Col xs={6}>
          <Image
            width="100%"
            height="150px"
            alt="detail-picture"
            src={
              "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
            }
          />
        </Col>
        <Col xs={6}>
          <Image
            width="100%"
            height="150px"
            alt="detail-picture"
            src={
              "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
            }
          />
        </Col>
      </Row>
    </Container>
  )
}
