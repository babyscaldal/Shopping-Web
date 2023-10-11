import { Form } from "react-bootstrap"
import { isSelectAllState, selectAll } from "../app/Redux/Slices/CartSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"

export default function AllCartSelected() {
  const isSelectAll = useAppSelector(isSelectAllState)
  const dispatch = useAppDispatch()

  return (
    <Form.Check
      checked={isSelectAll}
      className="z-0"
      id="header-checkbox"
      type="checkbox"
      onChange={() => {
        dispatch(selectAll())
      }}
    />
  )
}
