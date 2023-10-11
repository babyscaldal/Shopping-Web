import { Form } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useEffect, useState } from "react"
import { ICartList } from "./CartTable"
import {
  addToSelectedList,
  removeFromSelectedList,
  selectedCartListState,
} from "../app/Redux/Slices/CartSlice"

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
    <Form.Check
      onChange={() => {
        handleChange()
        // if (!isSelected) {
        //   onChange([...value, item])
        // } else if (isSelected) {
        //   onChange(
        //     value.filter(
        //       (selected: ICartList) => selected.id !== item.id,
        //     ),
        //   )
        // }
      }}
      checked={isSelectSingle}
      className="z-0"
      id="header-checkbox"
      type="checkbox"
    />
  )
}
