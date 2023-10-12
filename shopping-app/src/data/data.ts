import images from "../Image/images"

// Header
export const navOption = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Our Storer",
    to: "/product",
  },
  {
    title: "Blogs",
    to: "/blogs",
  },
  {
    title: "Contact",
    to: "/contact",
  },
]

//Home
interface ISmallerCart {
  title: string
  product: string
  info: string
  image: string
}

export const smallerCart: ISmallerCart[] = [
  {
    title: "BEST SALE",
    product: "Laptops Max",
    info: `From $1699.00 or $64.62/mo`,
    image: images.catBanner1,
  },
  {
    title: "15% OFF",
    product: "Smartwatch 7",
    info: "Shop the latest band styles and colors",
    image: images.catBanner2,
  },
  {
    title: "NEW ARRIVAL",
    product: "Buy IPad Air",
    info: "From $599 or $49.91/mo for 12 mo.",
    image: images.catBanner3,
  },

  {
    title: "FREE ENGRAVING",
    product: "AirPods Max",
    info: "High-fidelity playback & ultra-low distortion",
    image: images.catBanner4,
  },
]

export interface ITotalCart {
  image: string
  title: string
  info: string
}

export const totalServices: ITotalCart[] = [
  {
    image: images.service1,
    title: "Free Shipping",
    info: "From all orders over $100",
  },
  {
    image: images.service2,
    title: "Daily Surprise Offers",
    info: "Save up to 25% off",
  },
  {
    image: images.service3,
    title: "Support 24/7",
    info: "Shop with an expert",
  },
  {
    image: images.service4,
    title: "Affordable Prices",
    info: "Get factory direct price",
  },
  {
    image: images.service5,
    title: "Secure Payments",
    info: "100% protected payment",
  },
]

export interface ICategory {
  image: string
  product: string
  quantity: number
}

export const categories: ICategory[] = [
  {
    image: images.laptop,
    product: "Computers & Laptop",
    quantity: 10,
  },
  {
    image: images.camera,
    product: "Cameras & Videos",
    quantity: 10,
  },
  {
    image: images.smartTV,
    product: "Smart Televison",
    quantity: 10,
  },
  {
    image: images.smartWatchs,
    product: "Smart Watches",
    quantity: 10,
  },
  {
    image: images.gaming,
    product: "Music & Gaming",
    quantity: 10,
  },
  {
    image: images.mobile,
    product: "Mobiles & Tablets",
    quantity: 10,
  },
  {
    image: images.headphone,
    product: "Headphone",
    quantity: 10,
  },
  {
    image: images.airpod,
    product: "Accesories",
    quantity: 10,
  },
  {
    image: images.speaker,
    product: "Portable Speaker",
    quantity: 10,
  },
  {
    image: images.appliance,
    product: "Home Appliances",
    quantity: 10,
  },
]

export const brandList: string[] = [
  images.brand1,
  images.brand2,
  images.brand3,
  images.brand4,
  images.brand5,
  images.brand6,
  images.brand7,
  images.brand8,
]

export interface IBlogList {
  date: string
  image: string
  title: string
}

export const blogList: IBlogList[] = [
  {
    date: "05 Oct, 2023",
    image: images.blog1,
    title: "A Beutiful Sunday Morning Renaissance...",
  },
  {
    date: "05 Oct, 2023",
    image: images.blog2,
    title: "A Beutiful Sunday Morning Renaissance...",
  },
  {
    date: "05 Oct, 2023",

    image: images.blog3,
    title: "A Beutiful Sunday Morning Renaissance...",
  },
  {
    date: "05 Oct, 2023",

    image: images.blog4,
    title: "A Beutiful Sunday Morning Renaissance...",
  },
]

export interface IProductList {
  defaultImage: string
  hoverImage: string
  price: number
  title: string
  brand: string
}

export const productList: IProductList[] = [
  {
    brand: "Havels",
    defaultImage: images.smartWatchs,
    hoverImage: images.smartWatchs2,
    price: 100,
    title: "Headphone",
  },
  {
    brand: "Havels",
    defaultImage: images.smartWatchs,
    hoverImage: images.smartWatchs2,
    price: 100,
    title: "Headphone",
  },
  {
    brand: "Havels",
    defaultImage: images.smartWatchs,
    hoverImage: images.smartWatchs2,
    price: 100,
    title: "Headphone",
  },
  {
    brand: "Havels",
    defaultImage: images.smartWatchs,
    hoverImage: images.smartWatchs2,
    price: 100,
    title: "Headphone",
  },
]

export const productCardActionIcons: string[] = [
  images.prodCompare,
  images.view,
  images.addcart,
]

export interface IFamousList {
  image: string
  detail: string
  productname: string
  description: string
}

export const famousList: IFamousList[] = [
  {
    image: images.famous1,
    detail: "Big Screen",
    productname: "Smart Watch Series 7",
    description: "From $399or $16.62/mo. for 24 mo.*",
  },
  {
    image: images.famous2,
    detail: "Studio Display",
    productname: "600 nits of brightness.",
    description: "27-inch 5K Retina display",
  },
  {
    image: images.famous3,
    detail: "smartphones",
    productname: "Smartphone 13 Pro",
    description:
      "Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*",
  },
  {
    image: images.famous4,
    detail: "home speakers",
    productname: "Room-filling sound.",
    description: "From $699 or $116.58/mo. for 12 mo.*",
  },
]

interface ISelectFilter {
  value: number
  label: string
}

export const selectFilterData: ISelectFilter[] = [
  { value: 0, label: "Featured" },
  { value: 1, label: "Best selling" },
  { value: 2, label: "Alphabetically, A-Z" },
  { value: 3, label: "Alphabetically, Z-A" },
  { value: 4, label: "Price, low to high" },
  { value: 5, label: "Price, high to low" },
  { value: 6, label: "Date, old to new" },
  { value: 7, label: "Date, new to old" },
]
