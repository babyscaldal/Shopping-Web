import { Badge, Button } from "@mui/material";
import * as React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";
import LoginWarning from "../../LoginWarning/LoginWarning";
import { useState } from "react";
import { IOrderHotel } from "../../../reducers/hotelList.reducer";
import { RootState } from "../../../stores.ts/stores";

export interface IMyBookingProps {}

export default function MyBooking() {
  const [open, setOpen] = useState<boolean>(false);
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();

  const orderHotelList: IOrderHotel[] = useSelector(
    (state: RootState) => state.sortHotel.infoUser.orderHotelList
  );

  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  return (
    <React.Fragment>
      <Button
        sx={{ color: "text.primary", display: "block" }}
        onClick={() =>
          userLogin.isLogin ? navigate("order-hotel") : setOpen(true)
        }
      >
        <Badge
          sx={{ mr: 0.7 }}
          badgeContent={isLogin ? orderHotelList.length : null}
          color="secondary"
        >
          <ListAltIcon color="primary" />
        </Badge>
        Chỗ đã đặt
      </Button>
      {<LoginWarning open={open} setOpen={setOpen} />}
    </React.Fragment>
  );
}
