import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { CartItem } from "./CartItem"
import AllCartSelected from "./AllCartSelected"
import { useAppSelector } from "../app/hooks"
import { selectedCartListState } from "../app/Redux/cart/CartSlice"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

export interface ICartList {
  id: number
}

export const cartList: ICartList[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function CartTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const selectedCartList = useAppSelector(selectedCartListState)
  console.log(selectedCartList)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="MuiTableRow-divider">
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 50 }}
              >
                <AllCartSelected />
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 150 }}
              >
                Product
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 400 }}
              >
                Detail
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold" }}
                style={{ width: 150 }}
              >
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                <Tippy
                  placement="bottom"
                  content="Delete all selected products"
                >
                  <IconButton color="warning" aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tippy>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.length &&
              cartList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => <CartItem item={item} key={item.id} />)}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={cartList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
