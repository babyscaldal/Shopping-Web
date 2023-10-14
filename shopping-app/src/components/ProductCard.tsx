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
import { IProductResponse } from "../app/Redux/products/productType"

interface IProductCard {
  product: IProductResponse
  grid?: number
}

const ActionBar = styled.div`
  top: 5px;
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

const ProductItem = styled(Card)`
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
    right: 5px;
  }
`

const Category = styled(Card.Text)`
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--color-bf4800);
`

const Title = styled(Card.Title)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--color-131921);
  text-overflow: ellipsis;
  overflow: hidden;
`
const Price = styled(Card.Text)`
  font-weight: bold;
  font-size: 16px;
  color: var(--color-1c1b1b);
  margin-top: 8px;
`

const Detail = styled(Card.Text)`
  color: var(--color-777777);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const WishListIcon = styled.div`
  top: 5px;
  left: 5px;
`

export default function ProductCard({ product, grid }: IProductCard) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {/* <NavLink className="position-relative" to={"/product/:id"}> */}
      {grid === 12 ? (
        <ProductItem className="position-relative">
          <WishListIcon className="position-absolute z-1">
            <Checkbox
              // onChange={}
              icon={<FavoriteBorder color="warning" />}
              checkedIcon={<Favorite color="error" />}
            />
          </WishListIcon>

          <Card style={{ width: "100%" }}>
            <div className="d-flex justify-content-center align-items-center px-3">
              <Card.Img
                style={{
                  padding: "25px",
                  objectFit: "contain",
                  width: "150px",
                  height: "150px",
                }}
                variant="top"
                src={product?.image}
              />
              <Card.Body>
                <Category>{product?.category?.toUpperCase()}</Category>
                <Title>{product?.title}</Title>
                <Detail>{product?.description}</Detail>
                <Rating
                  precision={0.1}
                  readOnly
                  size="small"
                  name="simple-controlled"
                  value={product?.rating?.rate}
                />
                {/* <p style={{ fontSize: "13px" }} className="mb-0 me-3">
                  ({product?.rating?.count} reviewers)
                </p> */}

                <Price className="text-success">${product?.price}</Price>
              </Card.Body>
            </div>
          </Card>

          <ActionBar className="position-absolute">
            <div className="d-flex flex-column gap-15 z-1 ">
              <IconButton size="small" aria-label="compare" color="warning">
                <CompareArrowsOutlinedIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" aria-label="views" color="warning">
                <VisibilityOutlinedIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="small" aria-label="add-to-cart" color="warning">
                <ShoppingBagOutlinedIcon fontSize="inherit" />
              </IconButton>
            </div>
          </ActionBar>
        </ProductItem>
      ) : (
        <ProductItem className="position-relative">
          <WishListIcon className="position-absolute z-1">
            <Checkbox
              icon={<FavoriteBorder color="warning" />}
              checkedIcon={<Favorite color="error" />}
            />
          </WishListIcon>

          <Card style={{ width: "100%" }}>
            <div className="d-flex justify-content-center">
              <Card.Img
                style={{
                  padding: "25px",
                  objectFit: "contain",
                  width: "150px",
                  height: "150px",
                }}
                variant="top"
                src={product?.image}
              />
            </div>
            <Card.Body>
              <Category>{product?.category?.toUpperCase()}</Category>
              <Title>{product?.title}</Title>
              <Detail>{product?.description}</Detail>
              <Rating
                precision={0.1}
                readOnly
                size="small"
                name="simple-controlled"
                value={product?.rating?.rate}
              />
              {/* <p style={{ fontSize: "13px" }} className="mb-0 me-3">
                ({product?.rating?.count} reviewers)
              </p> */}

              <Price className="text-success">${product?.price}</Price>
            </Card.Body>
          </Card>

          <ActionBar className="position-absolute">
            <div className="d-flex flex-column gap-15 z-1 ">
              <IconButton size="small" aria-label="compare" color="warning">
                <CompareArrowsOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="views" color="warning">
                <VisibilityOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="add-to-cart" color="warning">
                <ShoppingBagOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </ActionBar>
        </ProductItem>
      )}
      {/* </NavLink> */}
    </div>
  )
}
