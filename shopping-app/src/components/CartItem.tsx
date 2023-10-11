import { TableRow, TableCell } from "@mui/material"
import images from "../Image/images"
import Image from "./Image"
import SingleCartSelected from "./SingleCartSelected"
import { ICartList } from "./CartTable"
import CountInputField from "./CountInputField"

interface ICartItem {
  item: ICartList
}

export const CartItem = ({ item }: ICartItem) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { backgroundColor: "action.hover", cursor: "pointer" },
      }}
    >
      <TableCell align="center">
        <SingleCartSelected item={item} name="selectedList" />
      </TableCell>
      <TableCell align="center">
        <Image
          width="150px"
          height="150px"
          src={images.smartWatchs}
          alt="smartWatchs"
        />
      </TableCell>
      <TableCell align="left" style={{ textAlign: "justify" }}>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aut officiis a magnam fugit beatae, nulla aspernatur doloremque
          nesciunt sequi?
        </h6>
        <p>Size: M</p>
        <p>Color: black</p>
      </TableCell>
      <TableCell align="center">$100.00</TableCell>
      <TableCell align="center">
        <CountInputField id={"cart-form-quantity"} name={"quantity"} />
      </TableCell>
      <TableCell align="center">20</TableCell>
    </TableRow>
  )
}
