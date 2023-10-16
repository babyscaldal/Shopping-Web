import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { publicRoutes } from "./routes/routes"
import "bootstrap/dist/css/bootstrap.min.css"
import GlobalStyles from "./style/GlobalStyle"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import OurStore from "./pages/OurStore"
import ProductsList from "./components/ProductsList"
import {
  getElectronics,
  getJewelry,
  getMenClothing,
  getProducts,
  getWomenClothing,
  renderProductsState,
} from "./app/Redux/products/productSlice"
import { useEffect, useState } from "react"
import { getAllCategories } from "./app/Redux/Categories/CategorySlice"

function App() {
  const renderProducts = useAppSelector(renderProductsState)
  const dispatch = useAppDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 9

  const startItem = (currentPage - 1) * itemPerPage
  const endItem = startItem + itemPerPage
  const displayedProducts = renderProducts?.slice(startItem, endItem)

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page)
  }

  const handleCategoryChange = () => {
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getAllCategories())
  }, [])

  useEffect(() => {
    dispatch(getMenClothing())
    dispatch(getWomenClothing())
    dispatch(getElectronics())
    dispatch(getJewelry())
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyles>
        <Routes>
          {publicRoutes.map((route, index) => {
            const path = route.path
            const Element = route.element
            return (
              <Route key={index} path={path} element={<Element />}>
                {route.children &&
                  route.children.map((item, index) => {
                    const Child = item.element
                    const childPath = item.path
                    return (
                      <Route
                        path={childPath}
                        key={index}
                        index={item.isIndex}
                        element={<Child />}
                      />
                    )
                  })}
                <Route
                  path="product"
                  element={
                    <OurStore
                      onCategoryChange={handleCategoryChange}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  }
                >
                  <Route index element={<Navigate to="all" />} />
                  <Route
                    path="all"
                    element={<ProductsList listItem={displayedProducts} />}
                  />
                  <Route
                    path=":category"
                    element={<ProductsList listItem={displayedProducts} />}
                  />
                </Route>
              </Route>
            )
          })}
        </Routes>
      </GlobalStyles>
    </BrowserRouter>
  )
}

export default App
