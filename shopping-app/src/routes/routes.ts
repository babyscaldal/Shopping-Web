//page
import About from "../pages/About"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"
import Layout from "../components/Layout"
import OurStore from "../pages/OurStore"
import Blog from "../pages/Blog"
import Compare from "../pages/Compare"
import WishList from "../pages/WishList"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import SignUp from "../pages/SignUp"
import ForgotPassword from "../pages/ForgotPassword"
import ResetPassword from "../pages/ResetPassword"
import SingleBlog from "../components/SingleBlog"
import PrivacyPolicy from "../pages/PrivatePolicy"
import TermAndCondition from "../pages/TermAndCondition"
import RefundPolicty from "../pages/RefundPolicy"

const publicRoutes = [
  {
    path: "/",
    element: Layout,
    children: [
      {
        element: Home,
        isIndex: true,
      },
      {
        path: "about",
        element: About,
        isIndex: false,
      },
      {
        path: "contact",
        element: Contact,
        isIndex: false,
      },
      {
        path: "store",
        element: OurStore,
        isIndex: false,
      },
      {
        path: "blogs",
        element: Blog,
        isIndex: false,
      },
      {
        path: "blogs/:id",
        element: SingleBlog,
        isIndex: false,
      },
      {
        path: "compare",
        element: Compare,
        isIndex: false,
      },
      {
        path: "wishlist",
        element: WishList,
        isIndex: false,
      },
      {
        path: "login",
        element: Login,
        isIndex: false,
      },
      {
        path: "cart",
        element: Cart,
        isIndex: false,
      },
      {
        path: "signup",
        element: SignUp,
        isIndex: false,
      },
      {
        path: "forgot-password",
        element: ForgotPassword,
        isIndex: false,
      },
      {
        path: "reset-password",
        element: ResetPassword,
        isIndex: false,
      },
      {
        path: "privacy-policy",
        element: PrivacyPolicy,
        isIndex: false,
      },
      {
        path: "refund-policy",
        element: RefundPolicty,
        isIndex: false,
      },
      {
        path: "term-condition",
        element: TermAndCondition,
        isIndex: false,
      },
    ],
  },
]

const privateRoutes = [
  {
    path: "/",
    element: Header,
  },
  {
    path: "/",
    element: Footer,
  },
]

export { publicRoutes, privateRoutes }
