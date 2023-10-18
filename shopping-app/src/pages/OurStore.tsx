import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Pagination } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../app/hooks"

import useTitle from "../hooks/useTitle"
import ToggleGrid from "../components/ToggleGrid"
import FilterSideBarForm from "../components/FilterSideBarForm"
import SortBarForm from "../components/SortBarForm"
import {
  changeProductsPerPage,
  getProducts,
  getProductsInCategory,
  renderProductsState,
} from "../app/Redux/products/productSlice"
import {
  categories,
  getAllCategories,
} from "../app/Redux/Categories/CategorySlice"
import toCapitalize from "../utils/toCapitalize"
import RandomProducts from "../components/RandomProducts"

export const FilterCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px 15px 25px;
  box-shadow: 0 0 10px #0000001a;

  ul,
  label {
    list-style-type: none;
    font-size: 13px;
    line-height: 30px;
    color: var(--color-777777);
    cursor: pointer;
  }

  input:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.25);
  }

  input:checked {
    background-color: var(--color-febd69);
    border-color: var(--color-febd69);
  }
`

export const FilterTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--color-1c1c1b);
  margin-bottom: 10px;
`

export const CategoryList = styled.div`
  list-style-type: none;
  a {
    font-size: 13px;
    line-height: 30px;
    color: var(--color-777777);
  }
`

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-1c1c1b);
  margin-bottom: 15px;
  margin-top: 20px;
`

const FilterSortGrid = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px #0000001a;
`

const Wrapper = styled.div`
  background-color: var(--color-f5f5f7);
  padding-top: 150px;
`

const GridSystem = styled.div`
  display: grid;
`
interface IOutStore {
  currentPage: number
  onPageChange: (event: any, page: number) => void
  onCategoryChange: () => void
}
export default function OurStore({
  currentPage,
  onPageChange,
  onCategoryChange,
}: IOutStore) {
  useTitle("Our Store")
  const [grid, setGrid] = useState<number>(3)
  const renderProducts = useAppSelector(renderProductsState)

  const dispatch = useAppDispatch()

  const allCategories = useAppSelector(categories)

  const handleChange = (value: number) => {
    setGrid(value)
  }

  const pageNumber = Math.ceil(renderProducts?.length / 9)

  return (
    <>
      <Wrapper>
        <Container fluid="xxl" className="py-3">
          <Row>
            <Col xs={3} style={{ minWidth: "200px", height: "100%" }}>
              <Row className="g-4">
                <Col xs={12}>
                  <FilterCard>
                    <FilterTitle>Categories</FilterTitle>
                    <CategoryList>
                      <li>
                        <NavLink
                          onClick={() => {
                            dispatch(getProducts())
                            onCategoryChange()
                          }}
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "blue" : "",
                            }
                          }}
                          to={`/products/all`}
                        >
                          All Products
                        </NavLink>
                      </li>
                      {allCategories?.map((category) => (
                        <li key={category?.id}>
                          <NavLink
                            onClick={() => {
                              dispatch(getProductsInCategory(category?.id))
                              onCategoryChange()
                            }}
                            style={({ isActive }) => {
                              return {
                                color: isActive ? "blue" : "",
                              }
                            }}
                            to={`/products/${category?.category}`}
                          >
                            {toCapitalize(category?.category)}
                          </NavLink>
                        </li>
                      ))}
                    </CategoryList>
                  </FilterCard>
                </Col>
                <Col xs={12}>
                  <FilterCard>
                    <FilterTitle>Filter By</FilterTitle>
                    <FilterSideBarForm />
                  </FilterCard>
                </Col>
                <Col xs={12}>
                  <FilterCard>
                    <FilterTitle>Product Tags</FilterTitle>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {allCategories?.map((category, index) => (
                        <span
                          key={category.id}
                          className="badge bg-light text-secondary rounded-3 py-2 px-3"
                        >
                          {toCapitalize(category?.category)}
                        </span>
                      ))}
                    </div>
                  </FilterCard>
                </Col>
                <Col xs={12}>
                  <FilterCard>
                    <FilterTitle>Random Product</FilterTitle>
                    <RandomProducts />
                  </FilterCard>
                </Col>
              </Row>
            </Col>
            <Col xs={9}>
              <div className="d-flex flex-column justify-content-between h-100">
                <FilterSortGrid className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0 d-block">Sort By:</p>
                      <SortBarForm />
                    </div>
                    <div className="d-flex align-items-center gap-10">
                      <p className="mb-0">{renderProducts?.length} products</p>
                      <ToggleGrid grid={grid} onChange={handleChange} />
                    </div>
                  </div>
                </FilterSortGrid>
                <FilterSortGrid className="mb-4  flex-grow-1">
                  <Outlet />
                </FilterSortGrid>
                <FilterSortGrid>
                  <div className="d-flex justify-content-center align-items-center">
                    <Pagination
                      page={currentPage}
                      count={pageNumber}
                      variant="outlined"
                      shape="rounded"
                      onChange={onPageChange}
                    />
                  </div>
                </FilterSortGrid>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}
