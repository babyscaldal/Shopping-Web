import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect, useState } from "react"
import { ICartList } from "./CartTable"
import {
  addToSelectedList,
  removeFromSelectedList,
  selectedCartListState,
} from "../app/Redux/Slices/CartSlice"
import { Checkbox } from "@mui/material"

interface ISingleCartSelected {
  name: string
  item: ICartList
}

export default function SingleCartSelected({
  name,
  item,
}: ISingleCartSelected) {
  const isSelectAll = useAppSelector((state) => state.cart.isSelectAll)

  const selectedCartList = useAppSelector(selectedCartListState)
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
