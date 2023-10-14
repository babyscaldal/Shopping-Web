import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect, useState } from "react"
import { ICartList } from "./CartTable"
import {
  addToSelectedList,
  removeFromSelectedList,
} from "../app/Redux/cart/CartSlice"
import { Checkbox } from "@mui/material"

interface ISingleCartSelected {
  item: ICartList
}

export default function SingleCartSelected({ item }: ISingleCartSelected) {
  const isSelectAll = useAppSelector((state) => state.cart.isSelectAll)

  const dispatch = useAppDispatch()

  const [isSelectSingle, setIsSelectSingle] = useState(false)

  const handleChange = () => {
    setIsSelectSingle((isSelect) => !isSelect)
  }

  useEffect(() => {
    if (isSelectAll) {
      setIsSelectSingle(true)
    } else if (!isSelectAll) {
      setIsSelectSingle(false)
    }
  }, [isSelectAll])

  useEffect(() => {
    if (isSelectSingle) {
      dispatch(addToSelectedList(item))
    } else if (!isSelectSingle) {
      dispatch(removeFromSelectedList(item))
    }
  }, [isSelectSingle])

  return (
    <Checkbox
      onChange={() => {
        handleChange()
      }}
      id="header-checkbox-single"
      checked={isSelectSingle}
    />
  )
}
