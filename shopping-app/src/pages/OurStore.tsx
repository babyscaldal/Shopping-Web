import { useState } from "react"
import useTitle from "../hooks/useTitle"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { Pagination, Rating } from "@mui/material"
import ProductCard from "../components/ProductCard"
import { productList } from "../data/data"
import ToggleGrid from "../components/ToggleGrid"
import FilterSideBarForm from "../components/FilterSideBarForm"
import SortBarForm from "../components/SortBarForm"

export const FilterCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 15px 25px;
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
  margin-bottom: 20px;
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

const RandomProducts = styled.div`
  h5 {
    font-size: 14px;
    margin-bottom: 8px;
  }

  &:first-child {
    border-bottom: 1px solid var(--color-ededed);
  }
`

const Wrapper = styled.div`
  background-color: var(--color-f5f5f7);
  padding-top: 160px;
`

export default function OurStore() {
  useTitle("Our Store")
  const [grid, setGrid] = useState<number>(3)

  const handleChange = (value: number) => {
    setGrid(value)
  }

  return (
    <>
      <Wrapper>
        <Container className="py-3">
          <Row>
            <Col xs={3}>
              <FilterCard className="mb-3">
                <FilterTitle>Shop By Categories</FilterTitle>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </FilterCard>
              <FilterCard className="mb-3">
                <FilterTitle>Filter By</FilterTitle>
                <FilterSideBarForm />
              </FilterCard>
              <FilterCard className="mb-3">
                <FilterTitle>Product Tags</FilterTitle>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </FilterCard>
              <FilterCard className="mb-3">
                <FilterTitle>Random Product</FilterTitle>
                <div>
                  <RandomProducts className="mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <Rating
                        size="small"
                        name="simple-controlled"
                        value={5}
                        // onChange={(event, newValue) => {
                        //   setValue(newValue)
                        // }}
                      />

                      <b>$ 300</b>
                    </div>
                  </RandomProducts>
                  <RandomProducts className="d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <Rating
                        size="small"
                        name="simple-controlled"
                        value={5}
                        // onChange={(event, newValue) => {
                        //   setValue(newValue)
                        // }}
                      />
                      <b>$ 300</b>
                    </div>
                  </RandomProducts>
                </div>
              </FilterCard>
            </Col>
            <Col xs={9}>
              <FilterSortGrid className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <SortBarForm />
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <ToggleGrid grid={grid} onChange={handleChange} />
                  </div>
                </div>
              </FilterSortGrid>
              <div className="products-list pb-5">
                <Row className="g-3">
                  {productList.map((product, index) => (
                    <Col
                      key={index}
                      xs={grid ? grid : 12}
                      md={grid ? grid : 6}
                      lg={grid ? grid : 3}
                    >
                      <ProductCard grid={grid} product={product} />
                    </Col>
                  ))}
                </Row>
              </div>
              <div className="d-flex justify-content-center  align-items-center">
                <Pagination count={10} variant="outlined" shape="rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}
