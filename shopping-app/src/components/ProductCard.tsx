import { Card } from "react-bootstrap"
import Rating from "@mui/material/Rating"
import styled, { keyframes } from "styled-components"
import { IProductList } from "../data/data"
import Image from "./Image"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import { Checkbox, IconButton } from "@mui/material"
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import { NavLink } from "react-router-dom"

interface IProductCard {
  product: IProductList
  grid?: number
}

const ActionBar = styled.div`
  top: 38px;
  right: -30px;
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
  overflow: hidden;
  transition: all 0.25s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  &:hover ${ActionBar} {
    animation: ${slideIn} 0.3s forwards linear;
    right: 0px;
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
  right: 0px;
`

export default function ProductCard({ product, grid }: IProductCard) {
  const { defaultImage, title, brand, price, hoverImage } = product

  return (
    <>
      {grid === 12 ? (
        <ProductItem>
          <NavLink className="position-relative" to={"/product/:id"}>
            <WishListIcon className="position-absolute z-1">
              <Checkbox
                size="small"
                icon={<FavoriteBorder color="warning" />}
                checkedIcon={<Favorite color="error" />}
              />
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
                <IconButton size="small" aria-label="compare" color="warning">
                  <CompareArrowsOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="small" aria-label="views" color="warning">
                  <VisibilityOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="add-to-cart"
                  color="warning"
                >
                  <ShoppingBagOutlinedIcon fontSize="inherit" />
                </IconButton>
              </div>
            </ActionBar>
          </NavLink>
        </ProductItem>
      ) : (
        <ProductItem>
          <NavLink className="position-relative" to={"/product/:id"}>
            <WishListIcon className="position-absolute z-1">
              <Checkbox
                size="small"
                icon={<FavoriteBorder color="warning" />}
                checkedIcon={<Favorite color="error" />}
              />
            </WishListIcon>
            <ImageWrapper>
              <StyledImage
                src={defaultImage}
                height="200px"
                width="100%"
                contain
              />
              <StyledImage
                src={hoverImage}
                height="200px"
                width="100%"
                contain
              />
            </ImageWrapper>
            <Card.Body>
              <Brand>{brand}</Brand>
              <Title>{title}</Title>
              <Rating
                readOnly
                size="small"
                name="simple-controlled"
                value={5}
              />
              <Price className="text-success">${price}</Price>
            </Card.Body>
            <ActionBar className="position-absolute">
              <div className="d-flex flex-column gap-15 z-1 ">
                <IconButton size="small" aria-label="compare" color="warning">
                  <CompareArrowsOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="small" aria-label="views" color="warning">
                  <VisibilityOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="add-to-cart"
                  color="warning"
                >
                  <ShoppingBagOutlinedIcon />
                </IconButton>
              </div>
            </ActionBar>
          </NavLink>
        </ProductItem>
      )}
    </>
  )
}
