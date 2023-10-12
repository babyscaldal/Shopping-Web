// import React from "react"
// import images from "../Image/images"
// import styled from "styled-components"
// import Image from "./Image"

// const Wrapper = styled.div`
//   background-color: #fff;
//   padding: 15px 25px;
// `

// export default function CheckoutItem() {
//   return (
//     <Wrapper className="d-flex gap-10 mb-2 align-align-items-center">
//       <div className="w-75 d-flex gap-10">
//         <div className="w-25 position-relative">
//           <span
//             style={{ top: "-10px", right: "2px" }}
//             className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
//           >
//             1
//           </span>
//           <Image
//             width="100px"
//             height="100px"
//             src={images.smartWatchs}
//             alt="product"
//           />
//         </div>
//         <div>
//           <h5 className="total-price">gfdhgf</h5>
//           <p className="total-price">s / #agfgfd</p>
//         </div>
//       </div>
//       <div className="flex-grow-1">
//         <h5 className="total">$ 100</h5>
//       </div>
//     </Wrapper>
//   )
// }

import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"

import { CheckoutItem } from "./CheckoutItem"
import { TableCell, TableHead, TableRow } from "@mui/material"

export interface ICartList {
  id: number
}

export const cartList: ICartList[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function CheckoutList() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 190 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="MuiTableRow-divider">
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 100 }}
              >
                Product
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: "auto" }}
              >
                Detail
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 20 }}
              >
                Quantity
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 20 }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.length &&
              cartList.map((item) => (
                <CheckoutItem item={item} key={item.id} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
