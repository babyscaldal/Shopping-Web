import { TableRow, TableCell, IconButton } from "@mui/material"
import images from "../Image/images"
import Image from "./Image"
import SingleCartSelected from "./SingleCartSelected"
import { ICartList } from "./CartTable"
import CountInputField from "./CountInputField"
import DeleteIcon from "@mui/icons-material/Delete"
import styled from "styled-components"

interface ICartItem {
  item: ICartList
}

const ItemHeader = styled.h6`
  font-weight: bold;
`

export const CheckoutItem = ({ item }: ICartItem) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { backgroundColor: "action.hover", cursor: "pointer" },
      }}
    >
      <TableCell align="center">
        <Image
          // width="100%"
          // height="100%"
          src={images.smartWatchs}
          alt="product"
          contain
        />
      </TableCell>
      <TableCell sx={{ textAlign: "center" }} align="left">
        <ItemHeader>Lorem ipsum dolor sit</ItemHeader>
        <p>Size: M</p>
        <p>Color: black</p>
      </TableCell>
      <TableCell align="center">20</TableCell>
      <TableCell align="center">$100.00</TableCell>
    </TableRow>
  )
}
