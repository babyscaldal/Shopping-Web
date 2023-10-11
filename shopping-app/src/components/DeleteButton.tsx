import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { handleCancelOrderHotel } from "../../../actions/getHotels.actions";

interface IDeleteButton {
  listIndex: number;
}

export default function DeleteButton({ listIndex }: IDeleteButton) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Button
        startIcon={<DeleteForeverIcon />}
        variant="text"
        color="error"
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText sx={{ fontWeight: "bold" }}>
            Bạn có chắc chắn muốn hủy đặt khách sạn không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            // sx={{ color: "error.main" }}
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            // sx={{ color: "success.main" }}
            autoFocus
            onClick={() => {
              handleClose();
              dispatch(handleCancelOrderHotel(listIndex));
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
