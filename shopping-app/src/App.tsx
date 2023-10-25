import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "tippy.js/dist/tippy.css"

import GlobalStyles from "./style/GlobalStyle"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import OurStore from "./pages/OurStore"
import ProductsList from "./components/ProductsList"
import { useEffect, useMemo, useState } from "react"
import {
  cloneToFilterProductList,
  compareProductsState,
  favoriteProductsState,
  filterProductsListState,
  getPopularProducts,
  getProducts,
  renderProductsState,
} from "./app/Redux/products/productSlice"
import { getAllCategories } from "./app/Redux/Categories/CategorySlice"
import Layout from "./components/Layout"
import SingleBlog from "./components/SingleBlog"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Cart from "./pages/Cart"
import Checkout from "./pages/CheckOut"
import Contact from "./pages/Contact"
import FavoriteList from "./pages/FavoriteList"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import PrivacyPolicy from "./pages/PrivatePolicy"
import ProductDetail from "./pages/ProductDetail"
import RefundPolicy from "./pages/RefundPolicy"
import ResetPassword from "./pages/ResetPassword"
import ShippingPolicy from "./pages/ShippingPolicy"
import SignUp from "./pages/SignUp"
import TermAndCondition from "./pages/TermAndCondition"
import Home from "./pages/Home"
import Compare from "./pages/Compare"
import { getAllBlogs } from "./app/Redux/blogs/blogSlice"
import Test from "./pages/Test"
import SearchProductsList from "./pages/SearchProductsList"

function App() {
  const renderProducts = useAppSelector(renderProductsState)
  const filterProducts = useAppSelector(filterProductsListState)
  const dispatch = useAppDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 6

  const startItem = (currentPage - 1) * itemPerPage
  const endItem = startItem + itemPerPage
  const displayedProducts = filterProducts?.slice(startItem, endItem)

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
    dispatch(getPopularProducts())
    dispatch(getAllBlogs())
  }, [])

  useEffect(() => {
    dispatch(cloneToFilterProductList(renderProducts))
  }, [renderProducts])

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "products",
            element: (
              <OurStore
                onCategoryChange={handleCategoryChange}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            ),
            children: [
              {
                index: true,
                element: <Navigate to="all" />,
              },
              {
                path: "all",
                element: <ProductsList listItem={displayedProducts} />,
              },
              {
                path: ":category",
                element: <ProductsList listItem={displayedProducts} />,
              },
            ],
          },
          {
            path: "products/:category/:id",
            element: <ProductDetail />,
          },
          {
            path: "blogs",
            element: <Blog onCategoryChange={handleCategoryChange} />,
          },
          {
            path: "blogs/:id",
            element: <SingleBlog />,
          },
          {
            path: "compare",
            element: <Compare />,
          },
          {
            path: "favorite",
            element: <FavoriteList />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "signUp",
            element: <SignUp />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "refund-policy",
            element: <RefundPolicy />,
          },
          {
            path: "shipping-policy",
            element: <ShippingPolicy />,
          },
          {
            path: "term-condition",
            element: <TermAndCondition />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path: "search",
            element: <SearchProductsList />,
          },
          { path: "test", element: <Test /> },
        ],
      },
    ])
  }, [handleCategoryChange, displayedProducts, currentPage, handlePageChange])

  const favoriteProducts = useAppSelector(favoriteProductsState)
  const compareProducts = useAppSelector(compareProductsState)

  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteProducts))
  }, [favoriteProducts])

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareProducts))
  }, [compareProducts])

  return (
    <GlobalStyles>
      <RouterProvider router={router} />
    </GlobalStyles>
  )
}

export default App
