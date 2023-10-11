import { Card, Button, Carousel } from "react-bootstrap"
import Rating from "@mui/material/Rating"
import styled, { keyframes } from "styled-components"
import { IProductList, productCardActionIcons } from "../data/data"
import { Link } from "react-router-dom"
import images from "../Image/images"
import Image from "./Image"

interface IProcuctCard {
  product: IProductList
  grid?: number
}

const ActionBar = styled.div`
  top: 38px;
  right: -20px;
  transition: all 0.3s;
`
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const ImageWrapper = styled.div``
const StyledImage = styled(Image)`
  height: 150px;
`

const ProductItem = styled(Card)`
  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px #0000001a;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  overflow: hidden;
  transition: all 0.25s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  &:hover ${ActionBar} {
    animation: ${slideIn} 0.3s forwards linear;
    right: 10px;
  }

  ${ImageWrapper} > ${StyledImage}:last-child {
    display: none;
  }

  &:hover ${ImageWrapper} > ${StyledImage}:nth-child(1) {
    display: none;
  }

  &:hover ${ImageWrapper} > ${StyledImage}:last-child {
    display: block;
  }
`

const Brand = styled(Card.Text)`
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--color-bf4800);
`

const Title = styled(Card.Title)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--color-131921);
  text-overflow: ellipsis;
  overflow: hidden;
`
const Price = styled(Card.Text)`
  font-weight: bold;
  font-size: 16px;
  color: var(--color-1c1b1b);
`

const Detail = styled(Card.Text)`
  color: var(--color-777777);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const WishListIcon = styled.div`
  top: 2%;
  right: 12px;
`

export default function ProductCard({ product, grid }: IProcuctCard) {
  const { defaultImage, title, brand, price, hoverImage } = product

  return (
    <>
      {grid === 12 ? (
        <ProductItem className="position-relative">
          <WishListIcon className="position-absolute z-1">
            <Link to="">
              <img src={images.favorite} alt="wishlist" />
            </Link>
          </WishListIcon>
          <div className="d-flex justify-content-between align-items-center">
            <ImageWrapper>
              <StyledImage src={defaultImage} height="200px" width="200px" />
              <StyledImage src={hoverImage} height="200px" width="200px" />
            </ImageWrapper>
            <Card.Body className="pe-4">
              <Brand>{brand}</Brand>
              <Title>{title}</Title>
              <Detail>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                rem corrupti, id non consequatur, ipsa ducimus, nam nesciunt
                culpa consequuntur voluptatem incidunt a laudantium facere
                repellat laborum necessitatibus sit magni est repudiandae
                perspiciatis deleniti error! Perferendis animi quibusdam eum
                libero, fuga illum ut optio autem atque necessitatibus
                blanditiis dolorem numquam.
              </Detail>
              <Rating
                size="small"
                name="simple-controlled"
                value={5}
                // onChange={(event, newValue) => {
                //   setValue(newValue)
                // }}
              />
              <Price className="text-success">${price}</Price>
            </Card.Body>
          </div>
          <ActionBar className="position-absolute">
            <div className="d-flex flex-column gap-15 z-1 ">
              {productCardActionIcons.map((icon, index) => (
                <Link key={index} to="">
                  <img src={icon} alt="action-icons" />
                </Link>
              ))}
            </div>
          </ActionBar>
        </ProductItem>
      ) : (
        <ProductItem className="position-relative">
          <WishListIcon className="position-absolute z-1">
            <Link to="">
              <img src={images.favorite} alt="wishlist" />
            </Link>
          </WishListIcon>
          <ImageWrapper>
            <StyledImage
              src={defaultImage}
              height="200px"
              width="100%"
              contain
            />
            <StyledImage src={hoverImage} height="200px" width="100%" contain />
          </ImageWrapper>
          <Card.Body>
            <Brand>{brand}</Brand>
            <Title>{title}</Title>
            {/* <Detail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt
              hic similique. Assumenda eligendi fugit, consequatur saepe
              delectus, repellendus a repellat in amet, minus unde beatae rem
              doloremque nulla aliquam harum voluptate eum! Molestias, ipsum
              dicta? Praesentium deleniti suscipit laudantium eum, sequi magni
              minima nulla aperiam voluptas error saepe vel!
            </Detail> */}
            <Rating readOnly size="small" name="simple-controlled" value={5} />
            <Price className="text-success">${price}</Price>
          </Card.Body>
          <ActionBar className="position-absolute">
            <div className="d-flex flex-column gap-15 z-1 ">
              {productCardActionIcons.map((icon, index) => (
                <Link key={index} to="">
                  <img src={icon} alt="action-icons" />
                </Link>
              ))}
            </div>
          </ActionBar>
        </ProductItem>
      )}
    </>
  )
}
